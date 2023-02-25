type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: "This is iPhone 14 Pro",
        type: 'phone',
        capacity: '256',
        price: 2000,
        image: "/images/iphone-purple.webp",
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: "This is iPhone 13 Pro",
        type: 'phone',
        capacity: '128',
        price: 1500,
        image: "/images/iphone-gold.webp",
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: "This is iPhone 12 Pro",
        type: 'phone',
        capacity: '512',
        price: 1000,
        image: "/images/iphone-silver.webp",
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: "This is iPhone 11 Pro",
        type: 'phone',
        capacity: '128',
        price: 600,
        image: "/images/iphone-blue.webp",
    },
    {
        id: 5,
        title: 'iPhone 8 plus',
        description: "This is iPhone 8 plus",
        type: 'phone',
        capacity: '256',
        price: 500,
        image: "/images/iphone-green.webp",
    },
    {
        id: 6,
        title: 'iPhone X',
        description: "This is iPhone X",
        type: 'phone',
        capacity: '64',
        price: 400,
        image: "/images/iphone-black.jpeg",
    }
]

export default productsArray