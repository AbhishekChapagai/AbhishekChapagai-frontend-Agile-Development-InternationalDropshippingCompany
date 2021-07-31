import { Avatar } from "@material-ui/core";
import axios from "axios";
import { Component } from "react";


class NavProfile extends Component {
    state = {
        firstName: "",
        img: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/user/token/decode", this.state.config)
            .then((response) => {
                const data = response.data
                this.setState({
                    firstName: data.firstName,
                    img: data.img
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="NavProfile">
                <Avatar src={"http://localhost:90/image/userImg/" + this.state.img} />
                <span className="nav_name"> {this.state.firstName} </span>
            </div>
        )
    }

}

export default NavProfile;