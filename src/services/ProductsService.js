import axios from "axios";

export default class ProductsService {
    constructor() {

    }

    load() {
        const URL = 'http://chiquitto.com.br/eniato/graphql';
        let body = {
            "query": "query { products {product_id, title} }",
            // "operationName": "...",
            // "variables": { "myVariable": "someValue", ... }
        };

        return axios
            .post(URL, body);
    }
}