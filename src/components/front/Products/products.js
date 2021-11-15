import React from "react";
import "./Products.css";

const Products =({ productItems, handleAddProduct }) => {

  const  products= [
        {
            "id": 0,
            "name": "Head Phone",
            "price": 20,
            "image": "./images/headphone2.jpeg"
        },

        {
            "id": 1,
            "name": "Head Phone",
            "price": 20,
            "image": "./images/headphone1.jpeg"
        },

        {
            "id": 2,
            "name": "Ear piece",
            "price": 5,
            "image": "./images/earpiece.png"
        },

        {
            "id": 3,
            "name": "Dell Laptop",
            "price": 100,
            "image": "./images/dell.jpeg"
        },

        {
            "id": 4,
            "name": "S20",
            "price": 100,
            "image": "./images/s20.jpeg"
        },
        {
            "id": 5,
            "name": "Bluetooth",
            "price": 50,
            "image": "./images/bluetooth.jpeg"
        },
        {
            "id": 6,
            "name": "Dell latitude",
            "price": 200,
            "image": "./images/dell-latitude.jpeg"
        },
        {
            "id": 7,
            "name": "Note 20",
            "price": 50,
            "image": "./images/note20.jpeg"
        },
        {
            "id": 8,
            "name": "Laptop",
            "price": 50,
            "image": "./images/images.jpeg"
        }
    ]
return(
<div className="products">
    {products.map(product =>{
        return(
            <div className="card">
<div className="product-image">
                <div>
                <img src={product.image} alt={product.name} />
                </div>
               <div>
                   <h2 className="product-name">{product.name}</h2>
                   <h3 className="product-price">{product.price}</h3>
               </div>
               <div>
                   <button className="button-add-to" onClick={()=> handleAddProduct(product)}>
                       Add to Cart
                   </button>
               </div>
            </div>
            </div>
            

            
        );
    })}
   </div>
);
}

export default Products;