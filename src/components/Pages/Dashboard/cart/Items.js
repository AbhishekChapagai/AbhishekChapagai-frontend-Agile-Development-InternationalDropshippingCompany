import axios from "axios";
import React, { useContext } from "react";
import { Component } from "react";

class Items extends Component {


  state = {
    quantity: 1,
    gadgetcart: [],
    config: {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
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
  //   this.setState({ quantity: parseInt(this.state.quantity) + parseInt(1) });
  // }

  // itemMinus = () => {
  //   const minus = this.state.quantity;

  //   if (minus > 1) {
  //     this.setState({ quantity: parseInt(this.state.quantity) - parseInt(1) });
  //   }
  //   else {
  //     {alert("remove product!")}
  //   }
  // }

  render() {
    if (localStorage.getItem('token')) {
      var items = <>{
        this.state.gadgetcart.map((cart) => {
          return (
            <div>
              <div className="items-info">
                <div className="product-img">
                  <img src={"http://localhost:90/gadget/" + cart.productimage} alt="img" />
                </div>

                <div className="title">
                  <h2><a href={"/product/cosmetic/cosmeticdetails/" + cart.productid}>{cart.productname}</a></h2>
                  <p>{cart.producttype}</p>
                </div>

                <div className="add-minus-quantity">
                  {/* <button className="fas fa-minus minus" onClick={this.itemMinus}></button> */}
                 Qty: <input type="text" value= {this.state.quantity = cart.quantity} onChange={this.changeHandler} disabled />
                  {/* <button className="fas fa-plus add" onClick={this.itemPlus}></button> */}

                </div>
                <div className="item-price">
                  <h3>nrs. {cart.productprice * cart.quantity}/-</h3>
                </div>
                <div className="remove-item" >
                  <i
                    className="fas fa-trash-alt remove" style={{cursor:'pointer'}} onClick={this.removeItem.bind(this, cart._id)}
                  ></i>
                </div>
              </div>
              <hr />
            </div>
          )
        })
      }

      </>
    }

    return (items);
  }
}

export default Items;
