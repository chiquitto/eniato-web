import { Component } from 'react';

import { Row, Col, Collection } from 'react-materialize';

import Product from './components/Product';
import ProductsService from './services/ProductsService';

import './App.css';

// TODO: copy from https://codepen.io/leoespsanto/pen/zdgJER

export default class App extends Component {

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

        console.log(response.data.data);
      })
  }

  render() {
    const max = 15

    return (
      <ul className="collection">
        {Array(max).fill(0).map((v, k) =>
          <Product key={k} title="Arroz 5K" />
        )}
      </ul>
    )
  }

  render() {
    const { error, dataFetched, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!dataFetched) {
      return <div>Loading...</div>;
    } else {
      return (
        <Row>
          <Col m={6} s={12}>
            <Collection>
            {data.products.map(product => (
              <Product product={product} />
            ))}
            </Collection>
          </Col>
        </Row>
      );
    }
  }

}
