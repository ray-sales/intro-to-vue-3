const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 2234, size: '34' },
                { id: 2234, size: '35' },
                { id: 2234, size: '36' },
                { id: 2234, size: '37' },
                { id: 2234, size: '38' }
            ]
        }
    }
})