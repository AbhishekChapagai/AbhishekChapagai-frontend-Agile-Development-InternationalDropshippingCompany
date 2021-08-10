import axios from "axios";
import React, { useContext } from "react";
import { Component } from "react";

class Items extends Component {


  state = {
    gadgetcart: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:90/mycart/showall`)
      .then((response) => {
        console.log(response)
        this.setState({
          gadgetcart: response.data.data
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
    console.log(this.state.gadgetcart.length)
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

  // itemPlus = () => {
  //   this.setState({ quantity: this.state.gadgetcart.quantity + 1 });
  // }

  // itemMinus = () => {
  //   this.setState({ quantity: this.state.gadgetcart.quantity - 1 });
  // }

  render() {
    var items = <>{
      this.state.gadgetcart.map((cart) => {
        return (
          <div>
            <div className="items-info">
              <div className="product-img">
              <img src={"http://localhost:90/gadget/" + cart.gadgetimage} alt="img" />
              </div>

              <div className="title">
                <h2>{cart.gadgetname}</h2>
                <p>{cart.gadgetname}</p>
              </div>
              <div className="add-minus-quantity">
                <i className="fas fa-minus minus" onClick={"this.itemMinus"}></i>
                <input type="text" placeholder={cart.quantity} value={this.state.quantity} onChange={this.changeHandler} disabled />
                <button className="fas fa-plus add" onClick={"this.itemPlus"}></button>
                
              </div>
              <div className="item-price">
                <h3>nrs. {cart.gadgetprice * cart.quantity}/-</h3>
              </div>
              <div className="remove-item" >
                <i
                  className="fas fa-trash-alt remove" onClick={this.removeItem.bind(this, cart._id)}
                ></i>
              </div>
            </div>
            <hr />
          </div>
        )
      })
    }

    </>

    return (items);
  }
}

export default Items;
