import React from 'react';
import {
  Card, CardImg, CardBlock,
  CardSubtitle, Badge
} from 'reactstrap';
import {Link} from 'react-router-dom'

import {images} from '../utils/images/'


export default function ProductMiniature({item}) {
  return (
    <Card>
      <CardImg top width="100%" src={images.productImage(item.id, item.id_default_image)} alt={item.name}/>
      <CardBlock>
        <CardSubtitle className="text-center">
          <Link to={`/${item.id}-${item.link_rewrite}`}>{item.name}</Link>
        </CardSubtitle>
        <Badge>
          ${parseFloat(item.price).toFixed(2)}
        </Badge>
      </CardBlock>
    </Card>
  )
}