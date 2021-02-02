import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData(parms) {
            const url = 'http://localhost:8080/product';
            await axios.get(url,)
                    .then( response => setProducts(response.data))
                    .catch( error => {
                        console.error(error);
                    })
        }
        fetchData();
    }, []);
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display:"flex", flexWrap:"wrap"}}> 
                {products && products.map( item => (
                        <ProductCard key={item.id} value={item}/>
                    ))}
            </div>
        </div>
    )
}

export default Home;