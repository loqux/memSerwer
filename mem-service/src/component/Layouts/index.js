import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  IconButton,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

const drawerWidthLarge = 240;
const drawerWidthSmall = 80;

const styles = (theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidthLarge,
      flexShrink: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: drawerWidthSmall,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidthLarge,
  },

  smalDrower: {
    width: drawerWidthSmall,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  menuLink: {
    margin: theme.spacing(3),
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
      <Fragment>
        <MenuList>
          <MenuItem
            className={classes.menuLink}
            component={Link}
            to="/regular"
            selected={"/regular" === pathname}
          >
            REGULAR
          </MenuItem>
          <MenuItem
            className={classes.menuLink}
            component={Link}
            to="/hot"
            selected={"/hot" === pathname}
          >
            HOT MEM
          </MenuItem>
          <MenuItem
            className={classes.menuLink}
            component={Link}
            to="/addMem"
            selected={"/addMem" === pathname}
          >
            ADD MEM
          </MenuItem>
        </MenuList>
      </Fragment>
    );

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classes.smalDrower,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Drawer>
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
            <Hidden xsDown implementation="css">
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
          </nav>
          <main className={classes.content}>{children}</main>
        </div>
      </Fragment>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Layout);
