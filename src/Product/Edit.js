import React, { useState, useEffect } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import api from '../Api';

export default function EditProduct(props) {

    const [product, setProduct] = useState({});
    const [reload, setReload] = useState(0);

    useEffect(() => {
        getProduct();
    }, []);

    async function getProduct() {
        const response = await api.get('Stock/' + props.match.params.id)
        setProduct(response.data);
    }

    function onChange(value, name) {
        product[name] = value;
        setReload(reload + 1);
    }

    async function onSubmit(e) {
        e.preventDefault();

        const obj = {
            Id: props.match.params.id,
            Description: product.description,
            Price: product.price,
            Quantity: product.quantity,
            Unit: product.unit,
            Category: product.category,
            Inserted: product.inserted,
            Modified: product.modified,
        };

        const res = await api.put('Stock/', obj)
        if (res.status == 200)
            props.history.push('/')
    }

    console.log(product);

    return (
        <Container className="App">
            <h4 className="PageHeading">Product [ Edit ]</h4>
            <Form className="form" onSubmit={onSubmit}>
                <Col>
                    <FormGroup row>
                        <Label for="Description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input type="text" name="Description" value={product.description} onChange={(event) => onChange(event.target.value, 'description')} placeholder="Enter Description" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Price" sm={2}>Quantity</Label>
                        <Col sm={10}>
                            <Input type="text" name="Price" value={product.price} onChange={(event) => onChange(event.target.value, 'price')} placeholder="Enter Price" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Quantity" sm={2}>Quantity</Label>
                        <Col sm={10}>
                            <Input type="text" name="Quantity" value={product.quantity} onChange={(event) => onChange(event.target.value, 'quantity')} placeholder="Enter Quantity" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Unit" sm={2}>Unit</Label>
                        <Col sm={10}>
                            <Input type="select" name="Unit" value={product.unit} onChange={(event) => onChange(event.target.value, 'unit')} >
                                <option>Select Unit</option>
                                <option>UN</option>
                                <option>KG</option>
                                <option>M</option>
                                <option>PC</option>
                                <option>CX</option>
                                <option>L</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Category" sm={2}>Category</Label>
                        <Col sm={10}>
                            <Input type="select" name="Category" value={product.category} onChange={(event) => onChange(event.target.value, 'category')} placeholder="Enter Category">
                                <option>Select Category</option>
                                <option>MATÉRIA-PRIMA</option>
                                <option>INSUMO</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup row>
                        <Col sm={5}>
                        </Col>
                        <Col sm={1}>
                            <Button type="submit" color="success">Save</Button>{' '}
                        </Col>
                        <Col sm={1}>
                            <Button color="danger">Cancel</Button>{' '}
                        </Col>
                        <Col sm={5}>
                        </Col>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );

}