import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ProductsService from '../../services/ProductsService';
import './ProductList.css';
import { Container, List } from '@material-ui/core';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

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
        })
      })
      .catch(error => {
        this.setState({
          dataFetched: true,
          error: error
        })
      })
  }

  render() {
    return (
      <Container>
        {this.render1()}
      </Container>
    )
  }

  render1() {
    const { error, dataFetched, data } = this.state;

    if (error) {
      return <Error error={error} />
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
