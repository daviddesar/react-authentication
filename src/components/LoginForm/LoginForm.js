import React, { useState } from "react";
import { useHistory } from "react-router";
import firebaseConfig from "../../firebase";
import "./loginForm.style.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      setEmail("");
      setPassword("");
      history.push("/private");
    } catch (error) {
      alert(error);
    }
  };
  const handleCreateAccount = () => {
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form onSubmit={(e) => handleLogin(e)} className="login-form">
      <h1>Login</h1>
      <input value={email} name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button">
        Login
      </button>
      <p className="create-account" onClick={handleCreateAccount}>
        Create account
      </p>
    </form>
  );
}
