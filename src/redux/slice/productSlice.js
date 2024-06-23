import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: `product_${Date.now()}_1`,
            popularity: "best selling",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
            category: "Groceries",
            productName: "Assorted Coffee",
            price: 90,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_2`,
            popularity: "best selling",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg',
            category: "Groceries",
            productName: "Cashew Butter",
            price: 20,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_3`,
            popularity: "best selling",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg',
            category: "Groceries",
            productName: "Diabetic Cookies",
            price: 50,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_4`,
            popularity: "best selling",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg',
            category: "Groceries",
            productName: "Organic Honey",
            price: 90,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_5`,
            popularity: "trending products",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg',
            category: "Groceries",
            productName: "Edible Oil",
            price: 80,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_6`,
            popularity: "trending products",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
            category: "Groceries",
            productName: "Sanitizer",
            price: 15,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_7`,
            popularity: "trending products",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
            category: "Groceries",
            productName: "Red Chillies",
            price: 56,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_8`,
            popularity: "trending products",
            productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-300x300.jpg',
            category: "Groceries",
            productName: "Face Wash",
            price: 10,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_9`,
            productImage: 'https://images.unsplash.com/photo-1626120032630-b51c96a544f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Apple juice",
            price: 90,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_10`,
            productImage: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Orange juice",
            price: 45,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_11`,
            productImage: 'https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Coconut juice",
            price: 80,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_12`,
            productImage: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Strawberry juice",
            price: 25,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_13`,
            productImage: 'https://images.unsplash.com/photo-1603028769268-94e389e60414?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Pomegranate juice",
            price: 100,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_14`,
            productImage: 'https://images.unsplash.com/photo-1567587407679-8187b3b972aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Watermelon juice",
            price: 35,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_15`,
            productImage: 'https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Mango juice",
            price: 10,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_16`,
            productImage: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Pineapple juice",
            price: 65,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_17`,
            productImage: 'https://images.unsplash.com/photo-1473348229220-66f5e48021f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Kiwi juice",
            price: 95,
            quantity: 1,
        },
        {
            id: `product_${Date.now()}_18`,
            productImage: 'https://images.unsplash.com/photo-1699294899842-c59b12cc0249?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: "Juice",
            productName: "Muskmelon juice",
            price: 70,
            quantity: 1,
        },
    ],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product && product.quantity > 0) {
                product.quantity -= 1;
            }
        },
    }
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;
