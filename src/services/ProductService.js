import axios from "axios";

export default class ProductService {

  load(product_id) {
    const URL = 'http://chiquitto.com.br/eniato/graphql';

    const query = `query {
      productHistory(product_id:"${product_id}") {
        title,
        min_price {created_at, price, store {store_id, title}},
        max_price {created_at, price, store {store_id, title}},
        items { created_at, price, store {store_id, title}}
      }
    }`

    let body = {
      "query": query,
      // "operationName": "...",
      // "variables": { "myVariable": "someValue", ... }
    };

    return axios
      .post(URL, body);
  }

}