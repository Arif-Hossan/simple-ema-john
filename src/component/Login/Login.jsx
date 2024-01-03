import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const handleSignIn = (event) =>{
        // stop reloading
        event.preventDefault();
        // clear the error state
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // clear the form
            form.reset();
            // navigate
            navigate('/');
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
                    <input type="email" name="email"  placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"  placeholder='Enter your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John ? <Link to='/signup'>Create New Account</Link></small></p>
            <p><small className='text-error'>{error}</small></p>
        </div>
    );
};

export default Login;