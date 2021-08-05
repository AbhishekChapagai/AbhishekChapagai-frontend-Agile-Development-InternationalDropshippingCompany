import React, { useContext } from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import axios from "axios";
import { Component } from "react";


  // cosumer
  class ContextCart extends Component {

    state = {
      gadgetcart: [],
      tax:10,
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

    removeItem = () => {
      axios.delete('http://localhost:90/delete/mycart')
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err.response)
        })

      window.location.reload(false);

    }
    render() {

      const totalamount = this.state.gadgetcart.reduce((totalamount, item)=>totalamount + parseInt(item.quantity * item.gadgetprice),0)
      const totalamounttax = this.state.gadgetcart.reduce((totalamount, item)=>totalamount + parseInt((item.quantity * item.gadgetprice) + (this.state.tax/100) * item.gadgetprice , 0),0)

      if (this.state.gadgetcart.length === 0) {
        var cartContext = <>
          <div classname="container">
            <section className="main-cart-section">

              <p className="total-items">
                you have <span className="total-items-count">{this.state.gadgetcart.length} </span>
                item in shopping cart
              </p>


              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">
                    <h1>Your cart is Empty</h1>
                    <p>Please go to product page to view and add products. Thank You!</p>
                  </Scrollbars>
                </div>
              </div>
            </section>
          </div>
        </>
      } else {
        var cartContext = <>
          <div classname="container">
            <section className="main-cart-section">
              <p className="total-items">
                You have <span className="total-items-count">{this.state.gadgetcart.length} </span>
                item(s) in your shopping cart
              </p>

              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">

                    <Items></Items>

                  </Scrollbars>
                </div>
              </div>
              <div className="card-total">
                <h3>cart total: <span>nrs.{totalamount}</span> &nbsp; tax:<span>{this.state.tax}%</span></h3>
                <h3>
                  Total amount incl. tax: <span> nrs.{totalamounttax}/- </span>
                </h3>
                <button class="button">CheckOut</button>
                <button class="button-clear" onClick={this.removeItem} >Clear Cart</button>
              </div>
            </section>
          </div>
        </>
      }
      return (
        cartContext
      )
    }
  }
export default ContextCart;
