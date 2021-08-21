import axios from "axios";
import React, { useContext } from "react";
import { Component } from "react";
import CartList from "./CartList";

class Items extends Component {

  state = {
    gadgetcart: [],
    config: {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }
    )
  }

  removeItem = (id) => {
    axios.delete('http://localhost:90/delete/mycart/' + id)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err.response)
      })
    window.location.reload(false);
  }

  itemPlus = (i) => {
    this.setState({
      quantity: parseInt(this.state.quantity) + parseInt(1)
    })
  }

  itemMinus = () => {
    const minus = this.state.quantity;

    if (minus > 1) {
      this.setState({ quantity: parseInt(this.state.quantity) - parseInt(1) });
    }
    else {
      { alert("remove product!") }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:90/mycart/showall`, this.state.config)
      .then((response) => {
        console.log(response)
        this.setState({
          gadgetcart: response.data.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      })

  }

  render() {
    if (localStorage.getItem('token')) {
      var items = <>{
        this.state.gadgetcart.map((cart) => {
          return (
            <div>
              <CartList cart={cart} removeItem={this.removeItem} />
            </div >
          )
        })
      }
      </>
    }

    return (items);
  }
}

export default Items;
