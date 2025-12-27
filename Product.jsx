import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './App.css'
function Product()
{
    const[prod,setProd]=useState([])
    const[sort,setSort]=useState("")
    const[category,setCategory]=useState("")
   
    useEffect(()=>
    {
            axios.get('http://localhost:3001/getProduct')
            .then(result=>setProd(result.data))
            .catch(err=>console.log(err))
    }
       ,[] )
       let filteredProducts=[...prod];
       if(category)
        {
            filteredProducts=filteredProducts.filter(p=>p.category===category);
        }
        if(sort=="low")
        {
            filteredProducts.sort((a,b)=>a.price-b.price);
        }
        if(sort=="high")
        {
            filteredProducts.sort((a,b)=>b.price-a.price);
        }
       return(
        <div className="product-container">
        <h1>Products</h1>
        <div className="filter-container">
        <select onChange={(e)=>setSort(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
        </select>
        <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="">All categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="personalcare">Personal care</option>
            <option value="groceries">Groceries</option>
            <option value="homekitchen">Home kitchen</option>
        </select>
        </div>
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Category</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    
                    filteredProducts.map((p)=>
                    (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.description}</td>
                            <td>
  <img src={p.image} alt={p.name} width="100" height="100" />
</td>

                            <td>{p.category}</td>
                            
                        </tr>
                    )
                    
                    )
                }
            </tbody>
        </table>               
        <Link className="cart-btn"to ='/cart'>Add to Cart</Link> 
        </div>
    );

}
export default Product;