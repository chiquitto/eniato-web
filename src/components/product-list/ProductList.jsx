import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ProductsService from '../../services/ProductsService';
import './ProductList.css';
import { List } from '@material-ui/core';
import Loading from '../Loading';

export default class ProductList extends Component {

  service = new ProductsService()

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      dataFetched: false,
      data: []
    };
  }

  componentDidMount() {
    this.service.load()
      .then(response => {
        this.setState({
          dataFetched: true,
          data: response.data.data
        });
      })
  }

  render() {
    const { error, dataFetched, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (!dataFetched) {
      return <Loading />
    }
    
    return (
      <List>
        {data.products.map(product => (
          <ProductItem product={product} key={product.product_id} />
        ))}
      </List>
    )

  }

}
