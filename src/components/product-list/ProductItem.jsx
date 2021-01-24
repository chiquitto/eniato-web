import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import React, { Component } from 'react'

export default class ProductItem extends Component {

  render() {
    return (
      <ListItem
        button component="a"
        href={`/product/${this.props.product.product_id}`}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.product.title}
          secondary="Jan 9, 2014"
        />
      </ListItem>
    )
  }

}
