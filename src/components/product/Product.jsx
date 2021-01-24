import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import ProductService from '../../services/ProductService';

class Product extends Component {

  service = new ProductService()

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      dataFetched: false,
      data: []
    };
  }

  componentDidMount() {
    const { product_id } = this.props.match.params;

    this.service.load(product_id)
      .then(response => {

        console.log(response.data.data.productHistory);

        this.setState({
          dataFetched: true,
          data: response.data.data.productHistory
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
      return false /*(
        <Row>
          <Col m={6} s={12}>
            <h1>{data.title}</h1>
            {this.preco('Menor preço', data.min_price)}
            {this.preco('Maior preço', data.max_price)}
            {[...data.items.map(item => this.preco(null, item))]}
          </Col>
        </Row>
      )*/
    }
  }

  preco(title, item) {
    return (
      <p>{title}: R$ {item.price.toFixed(2)} em {item.store.title} no dia {item.created_at}</p>
    )
  }

}

export default withRouter(Product)