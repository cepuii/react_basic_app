/* eslint-disable jsx-a11y/anchor-is-valid */
import { handleAuthentification } from "../../store/AuthSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(handleAuthentification(data));
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLoginFormSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <GoogleIcon></GoogleIcon>
          </a>
          <a href="#" className="social">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="#" className="social">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
