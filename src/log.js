import "./log.css";
import { Link, useNavigate } from 'react-router-dom'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedEmail === email && storedPassword === password) {
            toast.success("Login successful!");
            navigate("/home");
        } else {
            toast.error("Invalid email or password");
            navigate("/log");
        }
    }; 
    
    return (
        <div className="log">
            <div className="loginpage">
                <div className="leftside">
                    <p>Welcome To SparkTrendzon</p>
                    <form onSubmit={handleLogin}> 
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit">Login</button>
                        <ToastContainer position="bottom-center"
                            toastStyle={{ width: '400px', height: '100px' }}  />
                    </form>
                    <h5>Get access to your Orders, Wishlist and Recommendations. Signup and enjoy the greatest deals</h5>
                    <div className="link">
                        <span>Don't have an account?</span>
                        <Link to="/signup">
                            <span>Signup</span>
                        </Link>
                    </div>
                </div>
                <div className="rightside">
                    <h5>Elevate Your Shopping Experience and explore a curated selection that matches 'Your Style' effortlessly. Unveil your shopping fantasies with us, from everyday essentials to exclusive finds with SparkTrendzon</h5>
                </div>
            </div>
        </div>
    );
}

export default Login;
