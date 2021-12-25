import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, IconButton } from "@mui/material";
import "./style.css";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} className="toolbarRoot">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          className="menuButton"
        ></IconButton>
        <div className="menubar">
          <Link to="/" className="menuItem">
            Home
          </Link>
          <Link to="/help" className="menuItem">
            How it works
          </Link>
          <Link to="/buyers" className="menuItem">
            Buyers
          </Link>
          <Link to="/faq" className="menuItem">
            FAQ
          </Link>
          <Link to="/news" className="menuItem">
            News
          </Link>
          <Link to="/contact" className="menuItem">
            Contact
          </Link>
          <Link to="/login" className="menuItem">
            Login
          </Link>
          <Button color="primary" variant="contained" className="connectButton">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
