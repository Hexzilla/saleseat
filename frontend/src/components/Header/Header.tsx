import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";

const styles = () => ({
  toolbarRoot: {
    paddingRight: 24,
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menubar: {
    display: 'flex',
    alignItems: 'center',
  },
  menuItem: {
    color: 'inherit',
    margin: '0 10px',
    fontSize: '1.0rem'
  },
  connectButton: {
    marginLeft: '2rem',    
  }
});

const Header = ({ classes, handleToggleDrawer }) => {
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.menubar}>
          <Link href="/#" className={classes.menuItem}>Home</Link>
          <Link href="/#/help" className={classes.menuItem}>How it works</Link>
          <Link href="#" className={classes.menuItem}>Buyers</Link>
          <Link href="#" className={classes.menuItem}>FAQ</Link>
          <Link href="#" className={classes.menuItem}>News</Link>
          <Link href="#" className={classes.menuItem}>Contact</Link>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton> */}
          <Button color="primary" variant="contained" className={classes.connectButton}>
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
