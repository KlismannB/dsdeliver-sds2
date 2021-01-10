import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from './api';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

    useEffect(() => {
        fetchProducts().then(response => setProducts(response.data)).catch(error => alert(error));
    }, [])

    useEffect(()=>{
        
    }, []);

     return (  
        <div className="orders-container">
            <StepsHeader></StepsHeader>
            <ProductsList products={products}></ProductsList>
        </div>
     )
}

export default Orders;