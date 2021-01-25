import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"
import { withStyles } from '@material-ui/core';
import Header from "./components/header/Header";
import ProductList from './pages/product-list/ProductList';
import Product from "./pages/product/Product";

class App extends Component {
  render() {
    // const { classes } = this.props

    return (
      <React.Fragment>

        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path={["/"]} component={ProductList} />
            <Route path="/product/:product_id" component={Product} />
            {/* <Route exact path="/add" component={AddTutorial} /> */}
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);