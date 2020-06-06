import React from "react";
import { Paper, Drawer } from "@material-ui/core";

function NavBar({ styles }) {
  return (
    <Paper style={styles.Paper}>
      <Drawer variant="permanent" anchor="left"></Drawer>
    </Paper>
  );
}

export default NavBar;
