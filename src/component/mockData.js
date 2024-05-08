const products = [
    {
        popularity: "best selling",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        category: "Groceries",
        productName: "Assorted Coffee",
        price: 90
    },
    {
        popularity: "best selling",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg',
        category: "Groceries",
        productName: "Cashew Butter",
        price: 20
    },
    {
        popularity: "best selling",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg',
        category: "Groceries",
        productName: "Diabetic Cookies",
        price: 50
    },
    {
        popularity: "best selling",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg',
        category: "Groceries",
        productName: "Organic Honey",
        price: 90
    },
    {
        popularity: "trending products",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg',
        category: "Groceries",
        productName: "Edible Oil",
        price: 80
    },
    {
        popularity: "trending products",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg',
        category: "Groceries",
        productName: "Sanitizer",
        price: 15
    },
    { 
        popularity: "trending products",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg',
        category: "Groceries",
        productName: "Red Chillies",
        price: 56
    },
    {
        popularity: "trending products",
        productImage: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-300x300.jpg',
        category: "Groceries",
        productName: "Face Wash",
        price: 10
    },
    {
        productImage: 'https://images.unsplash.com/photo-1626120032630-b51c96a544f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Apple juice",
        price: 90
    },
    {
        productImage: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Orange juice",
        price: 45
    },
    {
        productImage: 'https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Cocunut juice",
        price: 80
    },
    {
        productImage: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Strawberry juice",
        price: 25
    },
    {
        productImage: 'https://images.unsplash.com/photo-1603028769268-94e389e60414?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Pomegranate juice",
        price: 100
    },
    {
        productImage: 'https://images.unsplash.com/photo-1567587407679-8187b3b972aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Water melon juice",
        price: 35
    },
    {
        productImage: 'https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Mango juice",
        price: 10
    },
    {
        productImage: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Pineapple juice",
        price: 65
    },
    {
        productImage: 'https://images.unsplash.com/photo-1473348229220-66f5e48021f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Kiwi juice",
        price: 95
    },
    {
        productImage: 'https://images.unsplash.com/photo-1699294899842-c59b12cc0249?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: "Juice",
        productName: "Muskmelon juice",
        price: 70
    },

]


const serviceData = [
    {
        value1:"Free shipping",
        value2:"Above $5 Only"
    },
    {
        value1:"Certified Organic",
        value2:"100% Guarantee"
    },
    {
        value1:"Huge Savings",
        value2:"At Lowest Price"
    },
    {
        value1:"Easy Return",
        value2:"No Question Asked"
    },
]

const featuresData = [{
    title: "Farm Fresh Fruits",
    content:"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage: "https://cdn.pixabay.com/photo/2016/03/23/04/44/fruits-and-vegetables-1274079_1280.png"
}, {
    title: "Fresh Vegetables",
    content:"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage:"https://cdn.pixabay.com/photo/2016/02/23/17/44/apple-1218166_1280.png"
}, {
    title:"Organic Legume",
    content:"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    featuredImage:"https://cdn.pixabay.com/photo/2018/04/17/23/04/grilled-vegetables-3329075_1280.png"
}]


const customerReviews = [
    {
        custName: "Mila Kunis",
        custImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        clientId: "client01",
        review: "I highly recommend organic store for your next shopping!!"
    },
    {
        custName: "Loki",
        custImage: "",
        clientId: "client02",
        review: "The organic store is excellent website having the best user experience as well as the service they provide"
    },
    {
        custName: "Alex",
        custImage: "",
        clientId: "client01",
        review: "The organic store is fantastic!"
    },
]

const logos = [
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
    },
    {
        logoImage: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
    }
]





export { products, customerReviews, logos, featuresData, serviceData }
