import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import './style.css';

export default function Header({ handleToggleDrawer }) {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} className="toolbarRoot">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleToggleDrawer}
          className="menuButton"
        >
        </IconButton>
        <div className="menubar">
          <Link to="/" className="menuItem">Home</Link>
          <Link to="/help" className="menuItem">How it works</Link>
          <Link to="/buyers" className="menuItem">Buyers</Link>
          <Link to="/faq" className="menuItem">FAQ</Link>
          <Link to="/news" className="menuItem">News</Link>
          <Link to="/contact" className="menuItem">Contact</Link>
          <Button color="primary" variant="contained" className="connectButton">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
