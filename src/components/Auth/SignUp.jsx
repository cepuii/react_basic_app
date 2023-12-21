import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SignUpForm() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
    };
    dispatch(handleRegistration(data));
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleFormSubmit}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
