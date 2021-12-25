import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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
          <Link href="/#" className="menuItem">Home</Link>
          <Link href="/#/help" className="menuItem">How it works</Link>
          <Link href="/#/buyers" className="menuItem">Buyers</Link>
          <Link href="/faq" className="menuItem">FAQ</Link>
          <Link href="/news" className="menuItem">News</Link>
          <Link href="/contact" className="menuItem">Contact</Link>
          <Button color="primary" variant="contained" className="connectButton">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
