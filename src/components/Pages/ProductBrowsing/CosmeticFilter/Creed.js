import axios from "axios";
import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class Creed extends Component{

    state = {
        cosmetic: [],
        config: {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        },
      }
    
      componentDidMount() {
        axios.get("http://localhost:90/cosmetic/creed", this.state)
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
        return (
            <>

            
                    <div className="showCosmetics">
                        <div className="cosmeticsBand">
                        <NavDropdown title="Product Type" id="collasible-nav-dropdown">
                      <LinkContainer exact to="/product/men">
                        <NavDropdown.Item >
                          Men
                        </NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer exact to="/product/women">
                        <NavDropdown.Item>
                          Women
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown> 
                        </div>
                        <div className="cosmeticFilter">
                        <div className="cosmeticName">
                          <h>Filter By Brand</h>
                        <a href={"/cosmetic/creed"}>Creed</a>
                        <a href={"/cosmetic/hugo"}>Hugo Boss</a>
                        <a href={"/cosmetic/victoria"}>Victoria Secret</a>
                        <a href={"/cosmetic/dior"}>Dior</a>
                          </div>
                          <div className="cosmeticType">
                          <h>Filter By Type</h>
                        <a href={"/cosmetic/perfume"}>Perfume</a>
                        <a href={"/cosmetic/nailpolish"}>Nail Polish</a>
                        <a href={"/cosmetic/lotion"}>Lotion</a>
                          </div>
                    </div>

                        <div className="mainCatCosmetics">
                            {
                                this.state.cosmetic.map((c) => {
                                    return (

                                        <div className="cosmeticsCat">
                                            {
                                                (<a href={"/product/cosmetic/cosmeticdetails/" + c._id}>
                                                    <div className="catCosmeticsImage">
                                                        <img src={"http://localhost:90/cosmetic/" + c.cosmeticimage} alt="img" />
                                                    </div>
                                                    <div className="COsmeticsNameCategory">
                                                        <p className="CosmeticsName">&nbsp;
                                                            {
                                                                c.cosmeticname
                                                            }<br></br>

                                                        </p>
                                                        <p className="CosmeticsPrice">&nbsp;Rs&nbsp;
                                                            {
                                                                c.cosmeticprice
                                                            }

                                                        </p>

                                                    </div></a>) 
                                                 
                                            }
                                            <div className="cosmeticsCart"><i class="fas fa-shopping-cart">&nbsp;</i> ADD TO CART</div>
                                        </div>


                                    )
                                })
                            }
                        </div>

                    </div>
            </>
        )

    }

}

export default Creed