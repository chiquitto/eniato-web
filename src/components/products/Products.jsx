import React, { Component } from 'react';
import ProductItem from './ProductItem';
import ProductsService from '../../services/ProductsService';
import './Products.css';
import { List } from '@material-ui/core';

// TODO: copy from https://codepen.io/leoespsanto/pen/zdgJER

export default class Products extends Component {

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
      return <div>Error: {error.message}</div>;
    } else if (!dataFetched) {
      return <div>Loading...</div>;
    } else {
      return Array(25).fill(0).map((_, i) => <h1 key={i}>{`Titulo ${i}`}</h1>)
      // return <List style={{maxHeight: '100%', overflow: 'auto'}} />
      
      // return (
      //   <Row>
      //     <Col m={6} s={12}>
      //       <Collection header="Produtos">
      //         {data.products.map(product => (
      //           <ProductItem product={product} key={product.product_id} />
      //         ))}
      //       </Collection>
      //     </Col>
      //   </Row>
      // );
    }
  }

}
