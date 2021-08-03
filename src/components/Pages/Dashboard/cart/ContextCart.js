import React, { useContext } from "react";
import Items from "./Items";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (item.length === 0) {
      return (
        <>
          <div classname="container">
            <section className="main-cart-section">
        
              <p className="total-items">
                you have <span className="total-items-count">{totalItems} </span>
                items in shopping cart
              </p>


              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">
                    <h1>Empty Cart</h1>
                  </Scrollbars>
                </div>
              </div>
            </section>
          </div>

        </>
      );
    } else {
      return (
        <>
          <div classname="container">

            <section className="main-cart-section">
              <p className="total-items">
                you have <span className="total-items-count">{totalItems} </span>
                items in shopping cart
              </p>


              <div className="cart-items">
                <div className="cart-items-container">
                  <Scrollbars className="cart-items-container">
                    {item.map((curItem) => {
                      return <Items key={curItem.id} {...curItem} />;
                    })}
                  </Scrollbars>
                </div>
              </div>
              <div className="card-total">
                <h3>
                  card total: <span> {totalAmount}₹ </span>
                </h3>
                <button class="button">CheckOut</button>
                <button class="button-clear"onClick={clearCart}>Clear Cart</button>
              </div>

            </section>
          </div>

        </>
      );
    }
  }
};

export default ContextCart;
