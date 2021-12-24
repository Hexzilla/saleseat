import React from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  toolbarRoot: {
    paddingRight: 24,
    justifyContent: 'space-between'
  },
});

const Home = ({ classes }) => {
  return (
    <div>
      Home Page
    </div>
  );
};

export default withStyles(styles)(Home);
