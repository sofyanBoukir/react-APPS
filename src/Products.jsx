import React, { useEffect, useState } from 'react'
import "./styles.css";
import Product from './Product';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
    <div className='products'>
        {
            loading ?<h1>Loading! Please wait...</h1>:null
        }
        {
            products.length && loading === false? 
                products.map((product) =>
                    <Link to={`/product/${product.id}`}>
                        <Product product={product} />
                    </Link>
                )
            : <h1>No products here</h1>
        }
    </div>
  )
}

export default Products;