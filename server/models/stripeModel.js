const YOUR_DOMAIN = 'http://localhost:3000/donate';
const stripeSchema = {
    payment_method_types: ['card'],
    line_items: [
        {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Stubborn Attachments',
                    images: ['https://i.imgur.com/EHyR2nP.png']
                },
                unit_amount: 2000
            },
            quantity: 1
        },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`
};

export default stripeSchema
