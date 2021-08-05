import React, { createContext, useContext, useReducer } from "react";
import "./cart.css";
import { products } from "./product";
import ContextCart from "./ContextCart";
import reducer from "./reducer";

// create a context
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItems: 0,
  quantity: 1,
};

const Cart = () => {
  // inPlace of useState we will use the useReducer Hook
  // const [item, setItem] = useState(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  return (
    <div className="itemarea">
      <div className="container">
      <CartContext.Provider
        value={{ ...state, clearCart, removeItem, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </div>
    </div>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;
