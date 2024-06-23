import { useState, useEffect } from 'react';
import products from '../assets/data/data.json';
import useResponsiveImage from './useResponsiveImage';

function useProductDetails(productName) {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Function to find the product by name
    const findProduct =  () => {
      const product = products.find(p => p.name === productName);
      if (product) {
        //import relevant images
        const imageDesktop = new URL(`../assets/product-${product.slug}/desktop/image-category-page-preview.jpg`, import.meta.url).href
        const imageTablet = new URL(`../assets/product-${product.slug}/tablet/image-category-page-preview.jpg`, import.meta.url).href
        const imageMobile = new URL(`../assets/product-${product.slug}/mobile/image-category-page-preview.jpg`, import.meta.url).href
        const categoryImageDesktop = new URL(`../assets/product-${product.slug}/desktop/image-category-page-preview.jpg`, import.meta.url).href
        const categoryImageTablet = new URL(`../assets/product-${product.slug}/tablet/image-category-page-preview.jpg`, import.meta.url).href
        const categoryImageMobile = new URL(`../assets/product-${product.slug}/mobile/image-category-page-preview.jpg`, import.meta.url).href
        const galImg1= new URL(`../assets/product-${product.slug}/desktop/image-gallery-1.jpg`,import.meta.url).href
        const galImg2=new URL(`../assets/product-${product.slug}/desktop/image-gallery-2.jpg`, import.meta.url).href
        const galImg3 =new URL(`../assets/product-${product.slug}/desktop/image-gallery-3.jpg`,import.meta.url).href
        //map through the others and get the images of every other item
        const otherImgs = product.others.map((other)=>{
          let name=other.slug
          let otherDesktopImg= new URL(`../assets/shared/desktop/${name}.jpg`,import.meta.url).href
          let otherTabletImg= new URL(`../assets/shared/tablet/${name}.jpg`,import.meta.url).href
          let otherMobileImg= new URL(`../assets/shared/mobile/${name}.jpg`,import.meta.url).href
          return {
            ...other, 
            images:{
              desktop:otherDesktopImg,
              tablet:otherTabletImg,
              mobile:otherMobileImg,
            }
          }
          
        })
      
       
       //set product details
        setProductDetails({
          name: product.name,
          slug: product.slug,
          description: product.description,
          isNew: product.new,
          category:product.category,
          categoryImage: {
            desktop:categoryImageDesktop,
            tablet: categoryImageTablet,
            mobile: categoryImageMobile,
          },
          image:{
            desktop:imageDesktop,
            tablet: imageTablet,
            mobile: imageMobile,
          },
          price: product.price,
          features: product.features,
          gallery: {
            first: galImg1,
            second: galImg2,
            third: galImg3,
          },
          otherImgs,
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