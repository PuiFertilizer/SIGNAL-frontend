import "./css/LoginPage.css";
import "../../App.css";
import { login, logout } from "../models/auth";

const LoginPage = () => {
  return (
    <div className="hero-container">
      <h1>Signal</h1>
      <p>Signal your interest with just a click</p>
      <div className="hero-btns">
        <button
          onClick={login}
          type="button"
          className="btn btn-outline-warning mb-3 btn-lg mx-3"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
