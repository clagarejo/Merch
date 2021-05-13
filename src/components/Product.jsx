import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { image, title, price, description } = product;

    return (
    <div className="Products-item">
    {/* <img src={`http://localhost:1337${image[0].url}`} alt={title} /> */}
        <img src={image} alt={title} />
        <div className="Product-item-info">
            <h2>{title}
                <span>$ {price}</span>
            </h2>
            <p>{description}</p>
        </div>
        <button type='button' onClick={handleAddToCart(product)} >Comprar</button>
    </div>
    )
};

export default Product;


