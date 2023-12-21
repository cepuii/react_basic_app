import {
  handleAuthentification,
  setLoginErrorMessage,
} from "../../store/AuthSlice";
import { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const errorMessageLate = useSelector((state) => state.auth.errorLoginMessage);
  const dispatch = useDispatch();

  const errorMessage = useDeferredValue(errorMessageLate);

  useEffect(() => {}, [loading]);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoginErrorMessage(""));
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
          <IconButton sx={socialLinkStyle} size="small" aria-label="socialLink">
            <GoogleIcon></GoogleIcon>
          </IconButton>
          <IconButton sx={socialLinkStyle} size="small" aria-label="socialLink">
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </div>
        <span>or use your account</span>
        <input
          required={true}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {typeof errorMessage !== "string" && (
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {typeof errorMessage !== "string" && (
          <span style={{ marginTop: "5px" }}>
            {errorMessage
              ?.filter((item) => item.property === "password")
              .flatMap((item) => Object.values(item.constraints))
              .join(", ")}
          </span>
        )}
        <button type="submit" disabled={loading}>
          Login
        </button>
        {typeof errorMessage === "string" && (
          <span style={{ marginTop: "5px" }}>{errorMessage}</span>
        )}
      </form>
    </div>
  );
}

export default SignInForm;
