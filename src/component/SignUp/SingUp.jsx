import React from 'react';

const SingUp = () => {
    return (
        <div className='form-container'>
        <h2 className="form-title">Sign Up</h2>
        <form action="">
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
                <input type="password" name="confirm_password"  placeholder='Retype your password' required/>
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
    </div>
    );
};

export default SingUp;