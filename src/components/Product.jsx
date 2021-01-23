import React, { Component } from 'react'
import { CollectionItem } from 'react-materialize';

export default class Product extends Component {

    render() {
        return (
            <CollectionItem href={`/product/${this.props.product.product_id}`} className="collection-item avatar">
                {/* <img src="images/yuna.jpg" alt="" class="circle" /> */}
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">{this.props.product.title}</span>
                {/* <p>First Line <br /> Second Line</p> */}
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </CollectionItem>
        )
    }

}
