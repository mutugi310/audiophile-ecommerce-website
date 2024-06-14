import { useState, useEffect } from 'react';
import products from '../assets/data/data.json';

function useProductDetails(productName) {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Function to find the product by name
    const findProduct = () => {
      const product = products.find(p => p.name === productName);
      if (product) {
        setProductDetails({
          name: product.name,
          description: product.description,
          isNew: product.new,
        });
      } else {
        setProductDetails(null); // Handle case where product is not found
      }
    };

    findProduct();
  }, [productName]);

  return productDetails;
};

export default useProductDetails;