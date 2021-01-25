import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class ProductItem extends Component {

  render() {
    return (
      <ListItem button component={Link}
        to={`/product/${this.props.product.product_id}`}
        >
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
