import { Component } from "react";

class Auth extends Component {
    state = {
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    render() {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem('userType') === 'User') {
                window.location.href = "/"
            }
            else if (localStorage.getItem('userType') === 'Admin') {
                window.location.href = "/"
            }
            else if (localStorage.getItem('userType') === '') {
                window.location.href = "/"
            }
            else {
                window.location.href = "/"
            }
        }
        else {
            window.location.href = "/auth"
        }

        return (
            <div className="Auth">
                Loading
            </div>
        )
    }
}

export default Auth;