import axios from "axios";
import { Component } from "react";
import { Row, Col, Card, CardGroup } from 'react-bootstrap';
import '../../infoflipcard/styles.css'
//FlipCard
// import Flippy, { FrontSide, BackSide } from "../components/infoflipcard";
import Flippy, { FrontSide, BackSide } from "../../infoflipcard";
// import { FlippyStyle, DefaultCardContents } from '../components/infoflipcard/infoflipcardelements'
import { FlippyStyle, DefaultCardContents } from '../../infoflipcard/infoflipcardelements'

class cosmetics extends Component {

    state = {
        cosmetic: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:90/cosmetic/showall", this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    cosmetic: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        var items = <>
            <div>
                <h2>Let's Browse Cosmetics</h2>

                <div className="FlippyCardAlign">
                    <div className="App">
                        <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>{
                            this.state.cosmetic.map((c) => {
                                return (
                                    <div>
                                        <Flippy
                                            ref={(r) => this.flippyHorizontal = r}
                                            flipOnClick={true}
                                            style={FlippyStyle}
                                        >
                                            <DefaultCardContents>
                                                <FrontSide>

                                                    <p><img src={"http://localhost:90/assets/image/cosmetic" + c.productimage} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="img" /></p>

                                                    Brand: {c.cosmeticname} <br /> Price: {c.cosmeticprice}<br />
                                                    {/* <button type="button">View Product</button> */}

                                                </FrontSide>

                                            </DefaultCardContents>

                                            <BackSide>
                                                <div className="backside">
                                                    <h5>Type:</h5> <p>{c.cosmetictype}</p>
                                                    <h5>Description:</h5>
                                                    <p> {c.cosmeticdescription}</p>
                                                    {/* <p>{p.userId}</p> */}
                                                </div>
                                            </BackSide>

                                        </Flippy>

                                    </div>


                                )
                            })

                        }
                        </div>
                    </div>
                </div>



            </div>


        </>
        return (
            items
        )
    }

}
export default cosmetics;