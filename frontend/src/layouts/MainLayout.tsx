import { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Header from "../components/Header/Header";

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: "flex"
  },
});

const MainLayout = (props: any) => {
  const [open, setOpen] = useState(false)
  
  return (
    <Fragment>
      <div className={props.classes.root}>
        <Header
          handleToggleDrawer={() => setOpen(true)}
        />
        <main
          className={classNames(props.classes.content, {
            [props.classes.contentShift]: open
          })}
        >
          {props.children}
        </main>
      </div>
    </Fragment>
  )
}

export default withStyles(styles)(MainLayout);
