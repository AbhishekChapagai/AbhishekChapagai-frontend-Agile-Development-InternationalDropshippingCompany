import axios from "axios";
import { Component } from "react";
import "./cart.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            userid: localStorage.getItem("userid"),
            paymentmethod: "creditcard",

            productinfo: {
                totalamount: "",
                totalamounttax: "",
                itemcount: "",
                myproduct: []
            },
            billingaddress: {
                billingfirstname: "",
                billinglastname: "",
                billingemail: "",
                billingphone: "",
                billingdistrict: "",
                billingprovince: "",
                billingaddress: "",
                billingzip: "",
            },
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            zip: '',
            district: '',
            province: '',
            userId: '',
            tax: '10',
            gadgetcart: [],
            config: {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
    }

    componentWillMount() {
        this.getuserdata();
        this.mytotalamount();
        console.log(this.state.headers)
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    rbbutton = (e) => {
        this.setState({ paymentmethod: e.target.value })
    }

    getuserdata = () => {
        axios.get("http://localhost:90/user/token/decode", this.state.config)
            .then((response) => {
                console.log(response)
                const data = response.data
                this.setState({
                    firstname: data.firstName,
                    lastname: data.lastName,
                    email: data.email,
                    phone: data.phone,
                    userId: data.userId,
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    mytotalamount = () => {
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

    submitData = (e) => {
        e.preventDefault();
        const data = {
            itemcount: this.state.productinfo.itemcount,
            totalamount: this.state.productinfo.totalamount,
            totalamounttax: this.state.productinfo.totalamounttax,
            billingfirstname: this.state.billingaddress.billingfirstname,
            billinglastname: this.state.billingaddress.billinglastname,
            billingemail: this.state.billingaddress.billingemail,
            billingphone: this.state.billingaddress.billingphone,
            billingzip: this.state.billingaddress.billingzip,
            billingaddress: this.state.billingaddress.billingaddress,
            billingdistrict: this.state.billingaddress.billingdistrict,
            billingprovince: this.state.billingaddress.billingprovince,
            userid: this.state.userid,
            paymentmethod: this.state.paymentmethod,
            productname: this.state.productinfo.productname
        }
        axios.post(`http://localhost:90/mycheckout/insert/`, data, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Added!")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    chkboxChangelhandler = (e) => {
        if (e.target.type === 'checkbox') {
            let checkboxValue = e.target.checked ? "checked" : ""
            this.setState({ [e.target.name]: checkboxValue })
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    copyInfo() {
        var cb1 = document.getElementById('copyinfo');
        var a1 = document.getElementById('FirstName');
        var al1 = document.getElementById('FirstName2');
        var a2 = document.getElementById('LastName');
        var al2 = document.getElementById('LastName2');
        var a3 = document.getElementById('Phone');
        var al3 = document.getElementById('Phone2');
        var v1 = document.getElementById('Email');
        var vl1 = document.getElementById('Email2');
        var t1 = document.getElementById('Address');
        var tl1 = document.getElementById('Address2');
        var c1 = document.getElementById('Zip');
        var cl1 = document.getElementById('Zip2');
        var d1 = document.getElementById('Provision');
        var dl1 = document.getElementById('Provision2');
        var e1 = document.getElementById('District');
        var el1 = document.getElementById('District2');

        if (cb1.checked == true) {
            al1.value = a1.value;
            al2.value = a2.value;
            al3.value = a3.value;
            vl1.value = v1.value;
            tl1.value = t1.value;
            cl1.value = c1.value;
            dl1.value = d1.value;
            el1.value = e1.value;
        } else {
            al1.value = '';
            al2.value = '';
            al3.value = '';
            vl1.value = '';
            tl1.value = '';
            cl1.value = '';
            dl1.value = '';
            el1.value = '';
        }
    }

    render() {
        let { paymentmethod } = this.state
        const totalamount = this.state.gadgetcart.reduce((totalamount, item) => totalamount + parseInt(item.quantity * item.productprice), 0)
        const totalamounttax = this.state.gadgetcart.reduce((totalamount, item) => totalamount + parseInt((item.quantity * item.productprice) + (this.state.tax / 100) * item.productprice, 0), 0)
        return (
            <div className="maincontainer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 order-md-2 mb-4 checkout-cart-container">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                Your cart total amount
                                <span class="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul class="list-group mb-3">
                                <p value={this.state.productinfo.itemcount = this.state.gadgetcart.length}
                                    class="list-group-item d-flex justify-content-between lh-condensed"
                                    onChange={this.changeHandler}
                                    name="itemcount">
                                    <div>
                                        <h6 class="my-0">Total product</h6>
                                    </div>
                                    <span class="text-muted">{this.state.gadgetcart.length}</span>
                                </p>
                                <p class="list-group-item d-flex justify-content-between lh-condensed"
                                    onChange={this.changeHandler}>
                                    <h6 class="my-0">Products</h6>
                                    <div>{
                                        this.state.gadgetcart.map((pq) => {
                                            return (
                                                <span value={this.state.productinfo.myproduct.productname = pq.productname} class="text-muted">{pq.productname}({pq.quantity})&nbsp;&nbsp;</span>
                                            );
                                        })
                                    }</div>


                                </p>
                                <p value={this.state.productinfo.totalamount = totalamount}
                                    class="list-group-item d-flex justify-content-between lh-condensed"
                                    onChange={this.changeHandler}
                                    name="totalamount">
                                    <div>
                                        <h6 class="my-0">Cart total</h6>
                                    </div>
                                    <span class="text-muted">{totalamount}</span>
                                </p>
                                <p class="list-group-item d-flex justify-content-between bg-light" onChange={this.changeHandler}>
                                    <div class="text-warning">
                                        <h6 class="my-0">Tax</h6>
                                    </div>
                                    <span class="text-warning">{this.state.tax} %</span>
                                </p>
                                <p value={this.state.productinfo.totalamounttax = totalamounttax}
                                    class="list-group-item d-flex justify-content-between"
                                    onChange={this.changeHandler}
                                    name="totalamounttax">
                                    <span class="text-success">Total incl. tax</span>
                                    <strong class="text-success">{totalamounttax}</strong>
                                </p>
                            </ul>
                            <form class="card p-1">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Promo code" />
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-secondary">Redeem</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-md-6 mb-3 ">

                            <h4 class="mb-3"><b>Customer information</b></h4>
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="FirstName" placeholder="firstname" name="firstname"
                                            value={this.state.firstname} data-testid="firstname-input" onChange={this.changeHandler} disabled />
                                        <label id="firstname" htmlFor="floatingInputFirst">&nbsp;First Name*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="LastName" placeholder="lastname" name="lastname"
                                            value={this.state.lastname} data-testid="lastname-input" onChange={this.changeHandler} disabled />
                                        <label id="lastname" htmlFor="floatingInputFirst">&nbsp;Last Name*</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Phone" placeholder="phone" name="phone"
                                            value={this.state.phone} data-testid="phone-input" onChange={this.changeHandler} disabled />
                                        <label id="phone" htmlFor="floatingInputFirst">&nbsp;Phone*</label>
                                    </div>
                                    <div className="col-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="email" className="form-control" id="Email" placeholder="name@gmail.com" name="email" value={this.state.email}
                                            data-testid="email-input" onChange={this.changeHandler} disabled />
                                        <label id="email" htmlFor="floatingInput">Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Address" placeholder="Address" name="address"
                                            value={this.state.address} data-testid="address-input" onChange={this.changeHandler} />
                                        <label id="address" htmlFor="floatingInputFirst">&nbsp;Address*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Tole" placeholder="tole" name="tole"
                                            value={this.state.tole} data-testid="tole-input" onChange={this.changeHandler} />
                                        <label id="tole" htmlFor="floatingInputFirst">&nbsp;Tole</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-floating mb-2 col-md-6 checkout-label">
                                        <select value={this.state.billingaddress.billingdistrict = this.state.district}
                                            name="district" class="custom-select d-block w-100 district-provision" id="District"
                                            className="form-select"
                                            aria-label="Floating label select example" onChange={this.changeHandler} required>
                                            <option value="" selected disabled hidden>select district...</option>
                                            <option>Bhaktapur</option>
                                            <option>Kathmandu</option>
                                            <option>Lalitpur</option>
                                        </select>
                                        <label htmlFor="floatingProductType">District</label>
                                    </div>
                                    <div class="form-floating mb-2 col-md-6 checkout-label">
                                        <select value={this.state.billingaddress.billingprovince = this.state.province}
                                            className="form-select" id="Provision" name="province"
                                            aria-label="Floating label select example" onChange={this.changeHandler} required>
                                            <option value="" selected disabled hidden>select province...</option>
                                            <option>Province 1</option>
                                            <option>Province 2</option>
                                            <option>Bagmati</option>
                                            <option>Gandaki</option>
                                            <option>Lumbini</option>
                                            <option>Karnali</option>
                                            <option>Sudurpaschim</option>
                                        </select>
                                        <label htmlFor="floatingProductType">Province</label>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Zip" placeholder="Zip code" name="zip"
                                            maxLength="5" value={this.state.zip} data-testid="zip-input" onChange={this.changeHandler} />
                                        <label id="zip" htmlFor="floatingInputFirst">&nbsp;Zip code*</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 order-md-1">
                            <form class="needs-validation" novalidate>

                                <hr class="mb-4" />
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="copyinfo" ref="copyinfo"
                                        value="copyinfo" name="copyinfo" onChange={this.copyInfo} />
                                    <label class="custom-control-label" for="same-address">&nbsp; Billing address is the same as a customer info</label>
                                    {/* <button>click</button> */}
                                </div>
                                {/* <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="save-info" />
                                    <label class="custom-control-label" for="save-info">&nbsp; Save this information for next time</label>
                                </div> */}
                                <hr class="mb-4" />

                                <h4 class="mb-3"><b>Billing Address</b></h4>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="FirstName2" placeholder="firstname" name="firstname"
                                            value={this.state.billingaddress.billingfirstname = this.state.firstname} data-testid="firstname-input" onChange={this.changeHandler} />
                                        <label id="billingfirstname" htmlFor="floatingInputFirst">&nbsp;First Name*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="LastName2" placeholder="lastname" name="billinglastname"
                                            value={this.state.billingaddress.billinglastname = this.state.lastname} data-testid="lastname-input" onChange={this.changeHandler} />
                                        <label id="billinglastname" htmlFor="floatingInputFirst">&nbsp;Last Name*</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Phone2" placeholder="phone" name="billingphone"
                                            value={this.state.billingaddress.billingphone = this.state.phone} data-testid="phone-input" onChange={this.changeHandler} />
                                        <label id="billingphone" htmlFor="floatingInputFirst">&nbsp;Phone*</label>
                                    </div>
                                    <div className="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="email" className="form-control" id="Email2" placeholder="name@gmail.com" name="billingemail"
                                            value={this.state.billingaddress.billingemail = this.state.email}
                                            data-testid="email2-input" onChange={this.changeHandler} />
                                        <label id="billingemail" htmlFor="floatingInput">Email</label>
                                        {this.state.billingaddress.billingemail && !(/\S+@\S+\.\S+/).test(this.state.billingaddress.billingemail) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Address2" placeholder="Address" name="address"
                                            value={this.state.billingaddress.billingaddress = this.state.address} data-testid="address-input" onChange={this.changeHandler} />
                                        <label id="billingaddress" htmlFor="floatingInputFirst">&nbsp;Address*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="Zip2" placeholder="zip code" name="zip"
                                            maxLength="5" value={this.state.billingaddress.billingzip = this.state.zip} data-testid="firstname-input" onChange={this.changeHandler} />
                                        <label id="billingzip" htmlFor="floatingInputFirst">&nbsp;Zip code*</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-floating mb-2 col-md-6 checkout-label">
                                        <select value={this.state.billingaddress.billingdistrict = this.state.district}
                                            name="district" class="custom-select d-block w-100 district-provision" id="District2"
                                            className="form-select"
                                            aria-label="Floating label select example" onChange={this.changeHandler} required>
                                            <option value="" selected disabled hidden>select district...</option>
                                            <option>Bhaktapur</option>
                                            <option>Kathmandu</option>
                                            <option>Lalitpur</option>
                                        </select>
                                        <label htmlFor="floatingProductType">District</label>
                                    </div>
                                    <div class="form-floating mb-2 col-md-6 checkout-label">
                                        <select value={this.state.billingaddress.billingprovince = this.state.province}
                                            className="form-select" id="Provision2" name="province"
                                            aria-label="Floating label select example" onChange={this.changeHandler} required>
                                            <option value="" selected disabled hidden>select province...</option>
                                            <option>Province 1</option>
                                            <option>Province 2</option>
                                            <option>Bagmati</option>
                                            <option>Gandaki</option>
                                            <option>Lumbini</option>
                                            <option>Karnali</option>
                                            <option>Sudurpaschim</option>
                                        </select>
                                        <label htmlFor="floatingProductType">Province</label>

                                    </div>
                                </div>


                                <hr class="mb-4" />

                                <h4 class="mb-3"><b>Payment information</b></h4>
                                <p class="mb-3"><u>Payment method</u></p>
                                <div class="row">
                                    <div class="col-md-3 mb-3"><label class="custom-control-label" for="credit">
                                        <input id="credit" name="paymentmethod" type="radio" class="custom-control-input"
                                            onChange={this.changeHandler.bind(this)} checked={paymentmethod === 'creditcard'}
                                            value="creditcard" />
                                        &nbsp; Credit card</label>
                                    </div>
                                    <div class="col-md-3 mb-3"><label class="custom-control-label" for="debit">
                                        <input id="debit" name="paymentmethod" type="radio" class="custom-control-input"
                                            onChange={this.changeHandler.bind(this)} checked={paymentmethod === 'debitcard'}
                                            value="debitcard" />
                                        &nbsp; Debit card</label>
                                    </div>
                                    <div class="col-md-6 mb-3"><label class="custom-control-label" for="esewa">
                                        <input id="e-sewa" name="paymentmethod" type="radio" class="custom-control-input"
                                            onChange={this.changeHandler.bind(this)} checked={paymentmethod === 'esewa'}
                                            value="esewa" />
                                        &nbsp; E-sewa</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="floatingInputFirst" placeholder="credit card number" name="ccnumber"
                                            value={this.state.ccnumber} data-testid="ccnumber-input" onChange={this.changeHandler} />
                                        <label id="ccnumber" htmlFor="floatingInputFirst">&nbsp;Credit card number*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="floatingInputFirst" placeholder="billing zip-code" name="billzip"
                                            maxLength="5" value={this.state.billzip} data-testid="billzip-input" onChange={this.changeHandler} />
                                        <label id="billzip" htmlFor="floatingInputFirst">&nbsp;Billing zip-code*</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="date" className="form-control" id="floatingInputFirst" name="date"
                                            value={this.state.billzip} data-testid="date-input" onChange={this.changeHandler} />
                                        <label id="date" htmlFor="floatingInputFirst">&nbsp;Expire date*</label>
                                    </div>
                                    <div class="col-md-6 mb-3 form-floating mb-2 checkout-label">
                                        <input type="text" className="form-control" id="floatingInputFirst" placeholder="billing zip-code" name="cvv"
                                            maxLength="3" value={this.state.cvv} data-testid="cvv-input" onChange={this.changeHandler} />
                                        <label id="cvv" htmlFor="floatingInputFirst">&nbsp;CVV*</label>
                                    </div>
                                </div>
                                <hr class="mb-4" />
                                <button class="btn btn-primary btn-lg btn-block button-chkout" onClick={this.submitData} type="button">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Checkout;