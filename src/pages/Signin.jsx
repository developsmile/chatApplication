import React from "react";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from '@mui/icons-material/Lock';
import "../css/Signin.css";
import { Box, Button,} from "@mui/material";
const Signin = () => {
  return (
    <>
      <div className="signin-container">
        <div className="signin-left">
          <h2>Sign In</h2>
          <img src="/assets/chat logo.png" alt="" />
        </div>
        <div className="signin-right">
          <Box className="input" sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email..." variant="standard" />
          </Box>
          <Box className="input" sx={{ display: "flex", alignItems: "flex-end" }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Password..." variant="standard"/>
          </Box>
          <a className="forgot-password" href="/forgot"> Forgot password ?</a>
          <Button className="button" variant="contained" size="small">
            <a href="/">Sign In</a> 
          </Button>
           <hr className="divider"/>
          <p>Don't Have Account ? <a href="/signup">Sign Up</a> </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
