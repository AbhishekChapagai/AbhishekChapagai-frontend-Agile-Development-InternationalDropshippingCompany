import React, { Component } from 'react'
import axios from "axios";
import "./request.css"


class request extends Component {



    render() {

        return (
            <>
            <h2>Request Your Product</h2>
                <div className="mainForm">
                    
                    <div className="formInput">
                        <form>
                            <label className="formLabel">Full name</label><br></br>
                            <input type="text" className="inputForm"></input><br></br>
                            <label className="formLabel">Phone no:</label><br></br>
                            <input type="number" className="inputForm"></input><br></br>
                            <label className="formLabel">E-mail</label><br></br>
                            <input type="text" className="inputForm"></input><br></br>
                            <label className="formLabel">Product name</label><br></br>
                            <input type="text" className="inputForm"></input><br></br>
                            <label className="formLabel">Product type</label><br></br>
                            <select className="inputForm"><br></br>
                                <option value="Cosmetic">Cosmetic</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Camera">Camera</option>
                            </select><br></br>
                            <label className="formLabel">Product description</label><br></br>
                            <textarea className="inputForm"></textarea>
                        </form>
                    </div>
                </div>


            </>
        )
    }

}

export default request