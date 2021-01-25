import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import ProductService from '../../services/ProductService';
import Loading from '../../components/Loading';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@material-ui/core';
import Error from '../../components/Error';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    return (
      <Container component="main" maxWidth="xs"
        style={{ marginTop: '8px' }}>
        {this.render1()}
      </Container>
    )
  }

  render1() {
    const { error, dataFetched } = this.state;

    if (error) {
      return <Error error={error} />
    }

    if (!dataFetched) {
      return <Loading />
    }

    return this.renderProduct()
  }

  renderProduct() {
    const { data } = this.state;

    return (
      <React.Fragment>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1">{data.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            {this.preco1('Menor preço', data.min_price)}
            {this.preco1('Maior preço', data.max_price)}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="h2">Últimos preços</Typography>
          </Grid>

          <Grid item xs={12}>
            {[...data.items.map(item => this.preco2(item))]}
          </Grid>
        </Grid>

      </React.Fragment>
    )
  }

  preco1(title, item) {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}: R$ {item.price.toFixed(2)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Loja: {item.store.title} ({item.created_at})</Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

  preco2(item) {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>R$ {item.price.toFixed(2)} ({item.created_at})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Loja: {item.store.title}</Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

}

export default withRouter(Product)