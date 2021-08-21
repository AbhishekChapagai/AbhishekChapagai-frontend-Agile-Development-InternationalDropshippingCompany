import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        quantity: this.props.cart.quantity,
        id: this.props.id,
        cart: this.props.cart,
        removeItem: this.props.removeItem
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    itemPlus = () => {
        this.setState({
            quantity: parseInt(this.state.quantity) + parseInt(1)
        });
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

    updateQty = () => {
        const cartId = this.state.cart._id
        axios.put(`http://localhost:90/quantity/update/${cartId}`, this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
        window.location.reload(false);
    }

    render() {
        return (
            <>
                <div className="items-info">
                    <div className="product-img">
                        <img src={`${process.env.REACT_APP_BACKEND_URL}/gadget/` + this.state.cart.productimage} alt="img" />
                    </div>

                    <div className="title">
                        <h2><a href={"/product/cosmetic/cosmeticdetails/" + this.state.cart.productid}>{this.state.cart.productname}</a></h2>
                        <p>{this.state.cart.producttype}</p>
                    </div>

                    <div className="add-minus-quantity">
                        <button className="fas fa-minus minus" onClick={this.itemMinus}></button>
                        <TextField className="qty_input" type="number" InputProps={{
                            inputProps: {
                                max: 5, min: 1
                            }
                        }} value={this.state.quantity} name="quantity" onChange={this.changeHandler} disabled> </TextField>
                        <button className="fas fa-plus add" onClick={this.itemPlus}></button>
                    </div>

                    <div className="item-price">
                        <h3>nrs. {this.state.cart.productprice * this.state.quantity}/-</h3>
                    </div>
                    <div className="remove-item" >
                        <i className="fas fa-trash-alt remove p-2" onClick={this.state.removeItem.bind(this, this.state.cart._id)} ></i>

                        <button onClick={this.updateQty} > add </button>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}
