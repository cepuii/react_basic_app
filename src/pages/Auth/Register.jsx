import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
const { Paper, TextField, Button } = require("@mui/material");

const inputStyle = {
  backgroundColor: "#eee",
  border: "none",
  padding: "12px 15px",
  margin: "8px 0",
  width: "100%",
};

const Register = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
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

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <Paper sx={{ padding: "50px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleFormSubmit}
      >
        <TextField
          required={true}
          type="text"
          name="fullName"
          onChange={(e) => setFullname(e.target.value)}
          sx={inputStyle}
        ></TextField>
        <TextField
          required={true}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle}
        ></TextField>
        <TextField
          required={true}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={inputStyle}
        ></TextField>
        <Button type="submit" disabled={loading}>
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
