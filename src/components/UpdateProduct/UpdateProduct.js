import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])

    const handleTitleChange = (e) => {
        const updatedTitle = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.title = updatedTitle;
        setProduct(updatedProduct);
    }

    const handlePriceChange = (e) => {
        const updatedPrice = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.price = updatedPrice;
        setProduct(updatedProduct);
    }

    const handleQuantityChange = (e) => {
        const updatedQuantity = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.quantity = updatedQuantity;
        setProduct(updatedProduct);
    }

    const handleUpdate = e => {
        e.preventDefault();

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert('Do you really want to update the product?')
                    setProduct({});
                    history.push('/products');
                }
            });
    }
    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={handleUpdate} action="">
                <p>
                    <input onChange={handleTitleChange} type="text" placeholder="Insert product title" value={product.title || ''} required />
                </p>
                <p>
                    <input onChange={handlePriceChange} type="text" placeholder="Insert product price" value={product.price || ''} required />
                </p>
                <p>
                    <input onChange={handleQuantityChange} type="number" placeholder="Insert product quantity" value={product.quantity || ''} required />
                </p>

                <p>
                    <input type="submit" value="Update Product" />
                </p>
            </form>
        </div>
    );
};

export default UpdateProduct;