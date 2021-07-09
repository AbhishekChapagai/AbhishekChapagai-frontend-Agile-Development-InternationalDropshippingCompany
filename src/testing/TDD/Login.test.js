import { render, screen } from "@testing-library/react";
import Login from '../../components/Pages/LoginRegister/Login';

it('should have a email, password and signup button', ()=>{
    render(<Login/>);

    
    const emailField = screen.getByText(/Email address/i);
    const passwordField = screen.getByText(/Password/i);
    const submitButton = screen.getByText(/SignIn/i);


    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
})

