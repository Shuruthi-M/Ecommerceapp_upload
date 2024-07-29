import React from "react";
import "./signup.css";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  function validateEmail(email) {
        const emailValidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailValidation.test(email);
    }
        const handleClick = (event) => {
        event.preventDefault();
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const mobileNumber = document.getElementById("mobile").value.trim();
        const birthDate = document.getElementById("birthdate").value.trim();
        console.log(password);

        if (firstName === "") {
            toast.error("First Name is required!");
            return;
        } 
        if (lastName === "") {
            toast.error("Last Name is required!")
            return;
        }
        if (email === "") {
            toast.error("Email is required!");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Invalid email address");
            return;
        }
        if (password === "") {
            toast.error("Password is required!");
            return;
        }
        if (mobileNumber === "") {
            toast.error("Mobile Number is required!");
            return;
        }
        if (birthDate === "") {
            toast.error("Birth Date is required!");
            return;
        }

          localStorage.setItem('email', email);
          localStorage.setItem('password', password);

        toast.success("Form submitted successfully");
    }

    return (
        <div className="signup">
            <div className="sign">
                <form>
                    <h3>Signup and enjoy the greatest deals</h3>
                    <div className="sub">
                        <div className="column">
                            <div className="column1">
                                <label>FirstName</label>
                                <input type="text" id="firstname" placeholder="e.g Charles" required />
                                <label>Email</label>
                                <input type="email" id="email" placeholder="e.g charles@gmail.com" required />
                                <label>Mobile Number</label>
                                <input type="tel" id="mobile" placeholder="e.g +91 9876543210" required />
                            </div>
                            <div className="column1">
                                <label>LastName</label>
                                <input type="text" id="lastname" placeholder="e.g Dickens" required />
                                <label>Password</label>
                                <input type="password" id="password" placeholder="e.g charles@123" required />
                                <label>Birth Date</label>
                                <input type="date" id="birthdate" required />
                            </div>
                        </div>
                        <div className="submit">
                            <button type="submit" onClick={handleClick}>Submit</button>
                            <ToastContainer position="bottom-center"
                            toastStyle={{ width: '400px', height: '100px' }}  />
                        </div>
                    </div>
                </form>
               
                <div className="path">
                    <span>Don't have an account ?</span>
                    <Link to="/log">
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
