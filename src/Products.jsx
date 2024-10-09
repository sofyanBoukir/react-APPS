import React, { useEffect, useState } from 'react'
import "./styles.css";
import Product from './Product';
import axios from 'axios';
import Header from './Header';

const Products = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchData = () =>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            setProducts(response.data);
            setLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    useEffect(() =>{
        fetchData()
    },[])


  return (
    <>
        <Header />
        <div className='products'>
        {
            loading ?<h1>Loading! Please wait...</h1>:null
        }
        {
            products.length && loading === false? 
                products.map((product) =>
                    <Product product={product} />
                )
            : <h1>No products here</h1>
        }
    </div>
    </>
  )
}

export default Products;