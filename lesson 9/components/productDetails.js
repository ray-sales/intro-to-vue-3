app.component('productDetails', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    /*html*/
    template: `
        <div>{{productDetails}}</div>
    `,

    computed: {
        productDetails() {
            return this.details
        }
    }
})