import React, { useEffect, useState } from 'react'
import data from '../assets/data/data.json'
function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            setProducts(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
        };
    
        fetchProducts();
    }, []);
    
    return { products, loading, error };
};
      


export default useProducts