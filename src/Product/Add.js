import React, { useState } from 'react';
import api from '../Api';

import { Container, Col, Form, FormGroup, Label, Input, Button, Select } from 'reactstrap';

export default function AddProduct(props) {

    const [product, setProduct] = useState({});
    const [reload, setReload] = useState(0);

    async function InsProduct() {
        const response = await api.post('Stock/', {
            Description: product.description,
            Quantity: product.quantity,
            Unit: product.unit,
            Category: product.category
        })

        if (response.status == 200) {
            alert("Data Save Successfully");
            props.history.push('/')
        } else {
            alert('Data not Saved');
        }
    }

    function onChange(value, name) {
        product[name] = value;
        setReload(reload + 1);
    }

    return (
        <Container className="App">
            <h4 className="PageHeading">Product [Insert]]</h4>
            <Form className="form">
                <Col>
                    <FormGroup row>
                        <Label for="Description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input type="text" name="Description" value={product.description} onChange={(event) => onChange(event.target.value, 'description')} placeholder="Enter Description" />
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
                            <Input type="select" name="Unit" value={product.unit} onChange={(event) => onChange(event.target.value, 'unit')} placeholder="Enter Unit">
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
                            <button type="button" onClick={InsProduct} className="btn btn-success">Submit</button>
                        </Col>
                        <Col sm={1}>
                            <Button color="danger" onClick={() => props.history.goBack(1)}>Cancel</Button>{' '}
                        </Col>
                        <Col sm={5}>
                        </Col>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );


}

