import { useDeferredValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRegistration,
  setRegisterErrorMessage,
} from "../../store/AuthSlice";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";

const socialLinkStyle = {
  bgcolor: "#252525",
  margin: "5px",
  width: "40px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#ff4b2b",
  },
};

function SignUpForm() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const errorMessageLate = useSelector(
    (state) => state.auth.errorRegisterMessage
  );
  const dispatch = useDispatch();
  const errorMessage = useDeferredValue(errorMessageLate);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setRegisterErrorMessage([]));
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
          <IconButton sx={socialLinkStyle} size="small" aria-label="socialLink">
            <GoogleIcon></GoogleIcon>
          </IconButton>
          <IconButton sx={socialLinkStyle} size="small" aria-label="socialLink">
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </div>
        <span style={{ color: "black" }}>
          or use your email for registration
        </span>
        <input
          required={true}
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Name"
        />
        {Array.isArray(errorMessage) && errorMessage.length > 0 && (
          <span style={{ marginTop: "5px" }}>
            {errorMessage
              ?.filter((item) => item.property === "fullName")
              .flatMap((item) => Object.values(item.constraints))
              .join(", ")}
          </span>
        )}
        <input
          required={true}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {Array.isArray(errorMessage) && errorMessage.length > 0 && (
          <span style={{ marginTop: "5px" }}>
            {errorMessage
              ?.filter((item) => item.property === "email")
              .flatMap((item) => Object.values(item.constraints))
              .join(", ")}
          </span>
        )}
        <input
          required={true}
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {Array.isArray(errorMessage) && errorMessage.length > 0 && (
          <span style={{ marginTop: "5px" }}>
            {errorMessage
              ?.filter((item) => item.property === "password")
              .flatMap((item) => Object.values(item.constraints))
              .join(", ")}
          </span>
        )}
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
        {typeof errorMessage === "string" && (
          <span style={{ marginTop: "5px" }}>{errorMessage}</span>
        )}
      </form>
    </div>
  );
}

export default SignUpForm;
