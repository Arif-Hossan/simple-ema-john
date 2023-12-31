import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SingUp = () => {
    const [error,setError]= useState('');
    // use createUser function using context
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (event) => {
        // stop reloading
        event.preventDefault();
        // clear the error
        setError('');
        // 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email,password,confirmPassword);
        // password validation
        if(password != confirmPassword){
            setError("Your password didn't match");
            return;
        }
        else if(password.length < 6){
            setError('Password must be 6 characters or longer');
            return;
        }
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // clear the form data
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='form-container'>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp} action="">
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  placeholder='Enter your email' required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"  placeholder='Enter your password' required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirmPassword"  placeholder='Retype your password' required/>
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
        <p><small className='text-error'>{error}</small></p>
    </div>
    );
};

export default SingUp;