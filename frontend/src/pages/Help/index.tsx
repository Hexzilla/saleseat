import React from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  toolbarRoot: {
    paddingRight: 24,
    justifyContent: 'space-between'
  },
});

const Help = ({ classes }) => {
  return (
    <div>
      Help Page
    </div>
  );
};

export default withStyles(styles)(Help);
