import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class Layout extends Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      location: { pathname },
      children,
    } = this.props;
    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem
            component={Link}
            to="/regular"
            selected={"/regular" === pathname}
            filter="regular"
          >
            Wszytskie memy
          </MenuItem>
          <MenuItem
            component={Link}
            to="/hot"
            selected={"/hot" === pathname}
            filter="hot"
          >
            Gorące memy
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <Fragment>
        <CssBaseline />

        <div className={classes.root}>
          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              ></IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Przaśne memy
              </Typography>
              <Button
                color="inherit"
                component={Link}
                to="/addMem"
                style={{ marginLeft: "70%" }}
              >
                Dodaj mema
              </Button>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Layout);
