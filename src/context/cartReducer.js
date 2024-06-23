

//reducer function
 const cartReducer=(state, action)=>{
    switch (action.type) {
       
        case 'ADD_TO_CART':
            const { slug, quantity, price, name, image } = action.payload;
             // Check if the item is already in the cart by finding its index using the product's slug
            const existingProductIndex = state.cart.findIndex(item => item.slug === slug);
        
            if (existingProductIndex > 0) {
                // If the product already exists in the cart, update its quantity
                const updatedCart = state.cart.map((item, index) =>
                index === existingProductIndex 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
                );
                return { ...state, cart: updatedCart };
            } else {
                // Add new product to the cart
                return {
                ...state,
                cart: [...state.cart, { slug, quantity, price, name, image }],
                };
            }
        case 'UPDATE_QUANTITY':
             // Update the quantity of a specific item in the cart
             return{
                ...state, 
                cart: state.cart.map(item =>
                    item.slug === action.payload.slug
                    ? {...item, quantity: action.payload.quantity}//// update the quantity for the matching item
                    : item // keep the other items unchanged
                ).filter(item => item.quantity > 0) //filter only items whose quntity is more than 0 so that any item with a quantity of 0 is excluded from the resulting cart array
             }

        case 'REMOVE_ALL':
            //set cart to an empty array to remove all items.
            return{...state, cart:[]}
    
        default:
            return state;
    }
 }

export default cartReducer;