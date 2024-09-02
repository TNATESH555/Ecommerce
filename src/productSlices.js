import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: 'cartslice',
    initialState: {
        cart: [],
        cartTotalQuantity: 0,  
        cartTotalAmount: 0,
    },
    reducers: {
        addtocart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cart.push(tempProduct);
            }
       
            state.cartTotalQuantity += 1;
            state.cartTotalAmount += action.payload.price;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        clearcart: (state) => {
            state.cart = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        gettotal: (state) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0,
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        removeFromCart: (state, action) => {
            const itemToRemove = state.cart.find(item => item.id === action.payload.id);
            if (itemToRemove) {
                state.cartTotalQuantity -= itemToRemove.cartQuantity;
                state.cartTotalAmount -= itemToRemove.price * itemToRemove.cartQuantity;
            }
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },

        
    },
});


export const { addtocart, clearcart, gettotal, removeFromCart, decreaseCart, increaseCart } = cartslice.actions;


export default cartslice.reducer;
