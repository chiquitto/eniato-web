import React, { Component } from 'react'
import { CollectionItem } from 'react-materialize';
import Icon from 'react-materialize/lib/Icon';

export default class ProductItem extends Component {

  render() {
    return (
      <CollectionItem
        href={`/product/${this.props.product.product_id}`}>
        <span className="title">{this.props.product.title}</span>
        <span className="secondary-content">
          <Icon>send</Icon>
        </span>
      </CollectionItem>
    )
  }

}
