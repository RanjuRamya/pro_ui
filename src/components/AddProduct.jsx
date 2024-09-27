import React, { useState } from 'react';
import productservice from '../service/productservice';

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg,setMsg]=useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const ProductRegister = (e) => {
        e.preventDefault();


        productservice.saveProduct(product)
            .then((res) => {
                console.log("product added successfully");
                setMsg("product added successfully");
                setProduct({
                    productName: "",
                    description: "",
                    price: "",
                    status: "",
            });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Add Product
                        </div>
                        {
                            msg &&
                            <p className="fs-4 text-center text-success">{msg} </p>
                        }
                        <div className="card-body">
                            <form onSubmit={ProductRegister}>
                                <div className="mb-3">
                                    <label>Enter product name</label>
                                    <input
                                        type="text"
                                        name="productname"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Status</label>
                                    <input
                                        type="text"
                                        name="status"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="btn btn-primary col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
