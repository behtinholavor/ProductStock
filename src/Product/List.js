import React, { useState, useEffect } from 'react';
import api from '../Api';
import { Link } from 'react-router-dom';

export default function ListProduct(props) {

    const [list, setList] = useState([]);

    async function getList() {
        const response = await api.get('Stock/');
        setList(response.data);
    }

    useEffect(() => {
        getList();
    }, []);

    async function DeleteProduct(id) {
        const response = await api.delete('Stock/' + id);
        if (response.status == 200) {
            getList();
            alert('Record deleted successfully!!');
        }
    }

    return (
        <div className="main-list">
            <div className="title-list">
                <h4 align="center">Stock Product</h4>
                <button type="button" onClick={() => props.history.push('/AddProduct')} className="btn btn-info btn-add">Add</button>
            </div>

            <table className="table table-striped" style={{ marginTop: 10 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Category</th>
                        <th colSpan="4"></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((obj, i) =>
                        <tr key={i}>
                            <td>
                                {obj.description}
                            </td>
                            <td>
                                {obj.quantity}
                            </td>
                            <td>
                                {obj.unit}
                            </td>
                            <td>
                                {obj.category}
                            </td>
                            <td>
                                <Link to={"/edit/" + obj.id} className="btn btn-success">Edit</Link>
                                <button type="button" onClick={() => DeleteProduct(obj.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
} 