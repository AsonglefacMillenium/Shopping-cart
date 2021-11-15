import React from 'react';
import "./Carte.css";



const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCardClearance}) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    return (
        <div className="cart-items">
            <div className="carte-header">
<h2>Cart Items</h2>
            </div>
            <div className="cart-clear">
                {cartItems.length >=1 && (
                    <button className="clear-cart-button" handleCardClearance={handleCardClearance}>Clear Cart</button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty">No items added</div>
            )}

            <div>
                {cartItems.map((item) =>{
                   
                    return(
                        <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.image} alt={item.name}/>

                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAddProduct(item)} >+</button>
                            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>

                        <div className="cart-items-price">
                            {item.quantity} * {item.price}
                        </div>

                    </div>

                   
                    );
                   
                })}
            </div>

            <div className="cart-items-total-price-name">
                            <h3>Total Price</h3>
                            <div className="cart-items-total-price">
                                ${totalPrice}
                            </div>

                        </div>
        </div>
    );
};





export default Cart;
