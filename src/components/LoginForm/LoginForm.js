import React from 'react';
import firebaseConfig from '../../firebase';
import './loginForm.style.css';

export default function LoginForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const {email, password} = e.target.elements;
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
        
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="login-form">
            <h1>Login</h1>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit" className="login-button">Login</button>
            <p className="create-account">Create account</p>
        </form>
    )
}
