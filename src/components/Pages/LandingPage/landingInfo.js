import { Component } from "react";
import axios from "axios";
import './landing.css';
import delivery from '../../../assets/images/fast.png'
import genuine from '../../../assets/images/genuine.png'
import request from '../../../assets/images/request.png'

class InformationLanding extends Component{

    render(){

        return(
            <>
                <div className="container infoLanding">
                    <div className="row displayInformation">
                        <div className="col-4 col-sm-4 infoOne">
                            <img src={delivery} type="image/png"/>
                            <p></p>
                            <p>Dhuwani is Nepal's first internationl dropshipping company offering the fastest yet reliable delivery service.</p>
                        </div>
                        <div className="col-4 col-sm-4 infoTwo">
                        <img src={genuine} type="image/png"/>
                        <p></p>
                        <p>We at Dhuwani provide you with genuine products imported from internationl market at better price.</p>
                        </div>
                        <div className="col-4 col-sm-4 infoThree">
                        <img src={request} type="image/png"/>
                        <p></p>
                        <p>Here at dhuwani, you can request product of your choice from abroad and we will make sure you get your hands on it.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default InformationLanding 