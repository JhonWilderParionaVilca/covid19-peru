import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// import clsx from "clx";

import { Menu } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
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
  Grid,
} from "@material-ui/core";

import Copyright from "./Footer";

const drawerWidth = 200;

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
    backgroundColor: theme.palette.secondary.dark,
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
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
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
      <nav>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>

        <MenuList>
          <MenuItem component={Link} to="/" selected={"/" === pathname}>
            <Typography variant="body2" color="textSecondary" align="center">
              En el Mundo <span></span> 🌎
            </Typography>
          </MenuItem>
        </MenuList>
      </nav>
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
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" component="h1" color="inherit" noWrap>
                COVID-19
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              onClick={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
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

          <div className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container spacing={3} justify="center" component="main">
              {children}
            </Grid>

            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Layout);
