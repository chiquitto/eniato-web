import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Products from '../products/Products'
import Product from '../product/Product'

const Content = props => (
  <main>
    <Switch>

      <Route path="/product/:product_id">
        <Product />
      </Route>

      <Route exact path="/">
        <Products />
      </Route>

    </Switch>
  </main>
)

export default Content
