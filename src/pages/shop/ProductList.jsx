

import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import styles from './productList.module.css';

const ShoppingCart = ({ items, total, onClose }) => {
  return (
    <div className={classNames(styles.shopping_cart)}>
      <div className={classNames(styles.shopping_cart_title)}>
        <h3>Shopping Cart</h3>
      </div>
      <div className={classNames(styles.shopping_cart_product_list)} >
        {items.map((item, index) => (
          <div className={classNames(styles.shopping_cart_product)} key={index}>
            <div className={classNames(styles.shopping_cart_product_image)}>
            <img className={classNames(styles.shopping_cart_product_img)} src={item.image} alt={item.name} />
            </div>
            <div className={classNames(styles.shopping_cart_product_details)}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            </div>

          </div>
        ))}
      </div>
      <p>Total: ${total}</p>
      <button className={classNames(styles.close_btn)} onClick={onClose}>Close</button>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    //https://6620f9243bf790e070b16473.mockapi.io/api/v1/products
    //https://fakestoreapi.com/products
    fetch('https://6620f9243bf790e070b16473.mockapi.io/api/v1/products')
      .then(response => response.json())
      .then(data => {
        const sortedProducts = data.sort((a, b) => a.price - b.price).slice(0, 9);
        setProducts(sortedProducts);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
    setTotalPrice(totalPrice + product.price);
    setCartVisible(true);
  };

  const handleCloseCart = () => {
    setCartVisible(false);
  };

  return (
    <div className={classNames(styles.product_list)}>
      <h2>Product List</h2>
      <div className={classNames(styles.products)}>
        {products.map((product, index) => (
          <div key={index} className={classNames(styles.product)}>
            <div className={classNames(styles.product_image)}>
              <img className={classNames(styles.product_image_img)} src={product.image} alt={product.name} />
            </div>
            <div className={classNames(styles.product_details)}>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {cartVisible && (
        <ShoppingCart items={cartItems} total={totalPrice} onClose={handleCloseCart} />
      )}
    </div>
  );
};

export default ProductList;
