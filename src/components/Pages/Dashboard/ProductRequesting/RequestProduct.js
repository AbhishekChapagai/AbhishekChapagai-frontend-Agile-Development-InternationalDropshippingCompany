import React, { Component } from 'react'
import axios from "axios";
import "./request.css"


class request extends Component {

    render() {

        return (
            <>
                {/* req = request */}
                <div className="RequestProduct">
                    <div className="container req_left_container">
                        {/* form */}
                        <div className="req_border_container col-12 col-sm-12 col-md-9 col-lg-6">
                            <div className="r_heading">
                                <h2 className="req_title"> Request a Product </h2>
                            </div>

                            <div className="r_form mb-3">
                                <form id="req_form">

                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="floatingInputProduct" placeholder="Product Name" name="productName"
                                                    value="" data-testid="" onChange={this.changeHandler} />
                                                <label id="productName" htmlFor="floatingInputProduct">Product Name</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-floating mb-2">
                                        <select className="form-select" id="floatingProductType" aria-label="Floating label select example">
                                            <option selected> Select product type</option>
                                            <option value="gadget">Gadget</option>
                                            <option value="cosmetic">Cosmetic</option>
                                        </select>
                                        <label htmlFor="floatingProductType">Product Type</label>
                                    </div>

                                    <div className="row g-2">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-2">
                                                <input type="text" className="form-control" id="floatingInputPLink" placeholder="Product Link" name="productLink"
                                                    value="" data-testid="" onChange={this.changeHandler} />
                                                <label id="productLink" htmlFor="floatingInputPLink">Product Link</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-2">
                                        <textarea className="form-control" placeholder="Leave a product description" id="floatingDescription"></textarea>
                                        <label htmlFor="floatingDescription">Product Description</label>
                                    </div>

                                    <button type="submit" id="btn_req_product" className="btn btn_primary_color btn-md btn-block" >Request Product</button>
                                </form>

                                {/* <p className="r_form_agree">
                                        By clicking Register, you agree to our <b>Terms of Service </b> and <b>Privacy Policy</b>.
                                    </p>

                                    <p className="r_form_login">
                                        Already have an account? <a className="l_link" href="/login"> Log in </a>
                                    </p> */}
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }

}

export default request