
import Product from './Product'
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./App.css";
import {Link} from "react-router-dom";


function Shoppingcart()
{
    const navigate=useNavigate();
    const[cart,setCart]=useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:3001/getProduct")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

function addToCart(p)
{
    var exists=false;
    for(let i=0;i<cart.length;i++)
    {
        if(p.id===cart[i].id)
        {
            exists=true;
            break;
        }
    }
    if(exists)
    {
    var updated=cart.map((item)=>
    {
        if(item.id===p.id)
        {
            return{...item,qty:item.qty+1};
        }
        return item;
    })
    setCart(updated);
    }
    else
    {
        setCart(cart.concat({...p,qty:1}));
    }

}
function increaseQty(id)
{
    var updated=cart.map((item)=>
    {
        if(item.id===id)
        {
            return{...item,qty:item.qty+1}
        }
        return item;
    })
    setCart(updated);
}
function decreaseQty(id)
{
    var updated=cart.map((item)=>
    {
        if(item.id===id)
        {
             return{...item,qty:item.qty-1};
        }
        return item;
    }).filter(item=>item.qty>0)
    setCart(updated);
}
function removeItem(id)
{
    var updated=cart.filter(item=>item.id!=id);
    setCart(updated);
}
function totalPrice()
{
    var total=0;
    for(let i=0;i<cart.length;i++)
    {
        total+=(cart[i].price*cart[i].qty);
    }
    return total;
}
function handleCheckout()
{
    if(cart.length===0)
    {
        alert("Cart empty!");
        return;
    }
    alert("Proceeding to checkout")
    setCart([]);
    navigate("/")
    
}
return(
    <div className="container">
    <h1>Shopping Cart</h1>
    <h2>Products</h2>
    <div className="product-list">
    {products.map((p) =>
    {
        return(
            <div className="product-card" key={p.id}>
            <img src={p.image} width="250" height="250"/>
            <h3>{p.name}</h3>
            <p>Price:₹{p.price}</p>
            <button onClick={function(){addToCart(p)}}>
                Add to Cart
            </button>
            </div>
        );
})}
</div>
    <h2>Cart</h2>
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item)=>
            {
                return(
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} width='150' height='150'/>
                        </td>  
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                        <td>
                            <button onClick={function(){increaseQty(item.id)}}>+</button>
                            <span className="qty">{item.qty}</span>
                            <button onClick={function(){decreaseQty(item.id)}}>-</button>
                        </td>
                        <td>₹{item.price*item.qty}</td>
                        <td><button onClick={function(){removeItem(item.id)}}>Remove</button></td>
                    </tr>
                );
              })}
        </tbody>
    </table>
    <h2 className="total">Total Price:₹{totalPrice()}</h2>
    <button className="checkout"onClick={function(){handleCheckout()}}>Checkout</button>
     <Link to="/support">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#1976D2",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Customer Support
        </button>
      </Link>
    </div>
);
}
export default Shoppingcart;