import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"
import { withStyles } from '@material-ui/core';
import Products from "./components/products/Products";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    // const { classes } = this.props

    return (
      <div>
        <Header />

        <Switch>
          <Route exact path={["/"]} component={Products} />
          {/* <Route exact path="/add" component={AddTutorial} /> */}
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);