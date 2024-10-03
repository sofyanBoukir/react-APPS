import React, { useEffect, useState } from 'react'
import "./styles.css"
import axios from 'axios';


const App = () => {

    const [category,setCategory] = useState("electronics");
    const [valueToSearch,setValueToSearch] = useState("");
    const [products,setProducts] = useState([]);


    const handleChange = (event) =>{
        setValueToSearch(event.target.value)
    }

    const handleSearch = () =>{
        const productsFiltered = products.filter(product =>{
            return product.title.includes(valueToSearch);
        })

        setProducts(productsFiltered);
    }

    const handleCategory = (e) =>{
        setCategory(e.target.value)
    }

    const fetchData = () =>{
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) =>{
            setProducts(response.data);

        })
        .catch((error) =>{
            console.log(error);
        })
    }

    useEffect(() =>{
        fetchData();
    },[category]);

  return (
    <div className='app'>
        <div>
            <h3>Search:</h3>
            <div className='search-conatiner'>

                <input type='text' 
                placeholder='Search here'
                value={valueToSearch}
                onChange={handleChange}/>

                <button id='search_btn' onClick={handleSearch}>Search</button>
                <button id='reset_btn'>Reset</button>
            </div>
        </div>
        <div className='categories-container'>
            <h4>Categories</h4>
            <button id={category === 'electronics'?"selected":""} value={"electronics"} onClick={handleCategory}>electronics</button>
            <button id={category === 'jewelery'?"selected":""} value={"jewelery"} onClick={handleCategory}>jewelery</button>
            <button id={category === "men's clothing"?"selected":""} value={"men's clothing"} onClick={handleCategory}>men's clothing</button>
            <button id={category === "women's clothing"?"selected":""} value={"women's clothing"} onClick={handleCategory}>women's clothing</button>
        </div>
        <div className='products-container'>
            <h3>Products</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
                {
                    products.length > 0 ?
                        products.map((product) =>{
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td id='price'>{product.price}</td>
                                <td>{product.description.slice(0,100)}...</td>
                                <td id='category'>{product.category}</td>
                                <td><img src={product.image} /></td>
                                <td id='rating'>{product.rating.rate}/5</td>
                            </tr>
                        })
                    :<p>No items founded</p> 
                }
            </table>
        </div>
    </div>
  )
}

export default App
