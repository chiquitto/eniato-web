import React, { Component } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styles } from "../../css-common"

class Header extends Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start"
              className={classes.menuButton} color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Toolbar />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Header);