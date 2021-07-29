// import React, { Component } from 'react'
// import axios from "axios";
// import './landing.css';


// class CameraCategory extends Component {

//     state = {
//         camera: [],
//         config: {
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         },
//     }

//     componentDidMount() {
//         axios.get("http://localhost:90/camera/six", this.state)
//             .then((response) => {
//                 console.log(response)
//                 this.setState({
//                     camera: response.data.data
//                 })
//             })
//             .catch((err) => {
//                 console.log(err.response)
//             })

//     }


//     render() {

//         return (
//             <>

//                 {/* CAMERA CATEGORY */}

//                 <div className="displayCamera">
//                     <div className="showGadget">
//                         <div className="cameraBand">
//                             <p className="txtCamera">Laptops</p>
//                             <div className="viewMoreCamera">View more </div>
//                         </div>
//                         <div className="mainCatCamera">
//                             {
//                                 this.state.gadget.map((ca) => {
//                                     return (

//                                         <div className="cameraCat">
//                                             <div className="catCameraImage">
//                                                 <img src={"http://localhost:90/assets/image/gadget/" + ca.gadgetimage} alt="img" />
//                                             </div>
//                                             <div className="CameraNameCategory">
//                                                 <p className="CameraName">&nbsp;
//                                                     {
//                                                         ca.gadgetname
//                                                     }<br></br>

//                                                 </p>
//                                                 <p className="CameraPrice">&nbsp;Rs&nbsp;
//                                                     {
//                                                         ca.gadgetprice
//                                                     }

//                                                 </p>
//                                             </div>
//                                         </div>

//                                     )
//                                 })
//                             }
//                         </div>

//                     </div>
//                 </div>

//             </>
//         )
//     }

// }

// export default CameraCategory