import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <pan className="loginTitle"> Login</pan>
        <form className="loginForm">
            <label>Email</label>
            <input type="text " className="loginInput" placeholder="Enter your email"></input>
            <label>Password</label>
            <input type="password" className="loginInput"  placeholder="Enter your password"></input>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link></button>
      

    </div>
  )
}
