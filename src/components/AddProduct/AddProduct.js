import React, { useRef, useState } from 'react';

const AddProduct = () => {

    const titleRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = { title, price, quantity };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Inserted Successfully');
                    e.target.reset();
                }
            })

    }
    return (
        <div>
            <h2>This is Add Product</h2>

            <form onSubmit={handleSubmit} action="">
                <p>
                    <input ref={titleRef} type="text" placeholder="Insert product title" required />
                </p>
                <p>
                    <input ref={priceRef} type="text" placeholder="Insert product price" required />
                </p>
                <p>
                    <input ref={quantityRef} type="number" placeholder="Insert product quantity" required />
                </p>

                <p>
                    <input type="submit" value="Add Product" />
                </p>
            </form>
        </div>
    );
};

export default AddProduct;