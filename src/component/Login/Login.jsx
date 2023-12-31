import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    // get the previous location fro navigation
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        // stop reloading
        event.preventDefault();
        // clear the error state
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // clear the form
                form.reset();
                // navigate
                // {replace:true} means don't take the data to the history stack
                navigate(from ,{replace:true});
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSignIn} action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder='Enter your password' required />
                    <div className='passwordView' onClick={()=>setShowPassword(!showPassword)}><small>
                        {
                            showPassword ? <span>Hide Password</span> : <span>Show Password</span>
                        }</small></div>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John ? <Link to='/signup'>Create New Account</Link></small></p>
            <p><small className='text-error'>{error}</small></p>
        </div>
    );
};

export default Login;