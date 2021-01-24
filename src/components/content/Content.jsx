import React from 'react';
import { Container } from 'react-materialize';

import { Switch, Route } from 'react-router-dom'

import Products from '../products/Products'
import Product from '../product/Product'

const Content = props => (
  <main>
    <Container>
      <Switch>

        <Route path="/product/:product_id">
          <Product />
        </Route>

        <Route exact path="/">
          <Products />
        </Route>

      </Switch>
    </Container>
  </main>
)

export default Content
