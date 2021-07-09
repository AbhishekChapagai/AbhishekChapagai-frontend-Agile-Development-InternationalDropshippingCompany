import { render, screen } from "@testing-library/react";
import Register from '../../components/Pages/LoginRegister/Register';

it('should have a firstname, lastname, email, password and signin button', ()=>{
    render(<Register/>);

    const firstnameField = screen.getByText(/First Name/i);
    const lastnameField = screen.getByText(/Last Name/i);
    const emailField = screen.getByText(/Email address/i);
    const passwordField = screen.getByText(/Password/i);
    const submitButton = screen.getByText(/SignUp/i);


    expect(firstnameField).toBeInTheDocument();
    expect(lastnameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
})