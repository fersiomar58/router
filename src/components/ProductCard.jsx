import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProductCard = ({element}) => {
    console.log(element);
  return (
    <div className='items'>
        <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={element.imgSrc} />
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
      {element.rating}
    </Card.Text>
    <Link to={`/info/${element.id}`}><Button variant="primary">info</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default ProductCard