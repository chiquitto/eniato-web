import axios from "axios";

export default class ProductsService {

  load() {
    const URL = 'http://chiquitto.com.br/eniato/graphql';
    let body = {
      "query": "query { products {product_id, title} }",
      // "operationName": "...",
      // "variables": { "myVariable": "someValue", ... }
    };

    return axios
      .post(URL, body)
      // .then(response => {
      //   console.log(response);
      //   return response
      // })
  }

}