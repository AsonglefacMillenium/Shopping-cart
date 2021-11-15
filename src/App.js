import React, {useState} from "react";
import data  from "./components/data/data";
import Header from "./components/front/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Routers from "./components/front/Routes/Routes";




const App = () =>{
  const { productItems } = data;
 const [cartItems, setcartItems] = useState([]);
 const handleAddProduct = (product) =>{
   const ProductExist = cartItems.find((item) => item.id === product.id);
   if (ProductExist){
     setcartItems(cartItems.map((item) => item.id === product.id ?
     {...ProductExist, quantity: ProductExist.quantity + 1} : item
     ));
   }
   else{
     setcartItems([...cartItems, {...product, quantity: 1}])
   }
 }
 const handleRemoveProduct = (product) =>{
  const ProductExist = cartItems.find((item) => item.id === product.id);
  if(ProductExist.quantity === 1){
    setcartItems(cartItems.map((item) => item.id !== product.id));
  }
  else{
    setcartItems(cartItems.map((item) => item.id === product.id ?
    {...ProductExist, quantity: ProductExist.quantity - 1} : item
    ));
  }
  
 }

 const handleCardClearance = () =>{
   setcartItems([]);
 }
  return(
<div className="app">

  <Router>
  <Header cartItems={cartItems}/>
 
  <Routers productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCardClearance={handleCardClearance}/>
  </Router>
 

</div>
  );
}

export default App;