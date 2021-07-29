import React, { Component } from 'react'
import gadgetad from '../../../assets/images/gadgetAD.png';
import './landing.css';


class Gadget extends Component {

    render() {

        return (
            <>
                <div className="GadgetContainer">
                    <div className="GadgetImage">
                        <img src={gadgetad} type="image/png"/>
                           </div> 
                    </div>

            </>
        )
    }

}
export default Gadget
