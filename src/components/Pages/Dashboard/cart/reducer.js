import axios from "axios";
import { Component } from "react";

class reducer extends Component{
  state = {
    gadgetcart:[]
  }

  componentDidMount (){
    axios.get(`http://localhost:90/mycart/showall`)
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

itemPlus = ()=>{
  this.setState({quantity:this.state.gadgetcart.quantity + 1});
}

  render(){
    var reducer=<>

    </>

    return(
      reducer
      );
  }
}

//   if (action.type === "INCREMENT") {
//     //   we need to find out which item is clicked
//     let updatedCart = state.item.map((curElem) => {
//       if (curElem.id === action.payload) {
//         return { ...curElem, quantity: curElem.quantity + 1 };
//       }
//       return curElem;
//     });
//     return { ...state, item: updatedCart };
//   }

//   if (action.type === "DECREMENT") {
//     //   we need to find out which item is clicked
//     let updatedCart = state.item
//       .map((curElem) => {
//         if (curElem.id === action.payload) {
//           return { ...curElem, quantity: curElem.quantity - 1 };
//         }
//         return curElem;
//       })
//       .filter((curElem) => curElem.quantity !== 0);
//     return { ...state, item: updatedCart };
//   }

//   return state;
// };

export default reducer;
