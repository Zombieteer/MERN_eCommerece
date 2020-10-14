import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`/api/products/${match.params.id}`)
            setProduct(res.data)
        }
        fetchProduct()
    }, [match.params.id])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'><strong>Go Back</strong></Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
                        <ListGroup.Item><Rating rating={product.rating} text={product.numReviews} /></ListGroup.Item>
                        <ListGroup.Item><strong>Price:</strong> ${product.price}</ListGroup.Item>
                        <ListGroup.Item><strong>Description:</strong> {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
