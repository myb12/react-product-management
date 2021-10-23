import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Products = () => {
    const [products, setProducts] = useState();
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    const handleUpdate = (id) => {
        history.push(`/product/update/${id}`);
    }

    const handleRemove = id => {

        if (window.confirm('Do you really want to delete the product')) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                });
        }
    }
    return (
        <div>
            <h2>Products {products?.length}</h2>

            <ul style={{ listStyle: 'none' }}>
                {
                    products?.map(product => <li key={product._id} style={{ marginBottom: 10 }} >{product.title} | Price: {product.price} | Quantity: {product.quantity}
                        <button style={{ marginLeft: 5 }} onClick={() => handleUpdate(product._id)}>Update</button>
                        <button onClick={() => handleRemove(product._id)}>Remove</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;