require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
  [1, { name: 'Support the I Ching Oracle Project' }],
])
/*
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceInCents, donationType } = req.body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: donationType,
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.SERVER_URL}/thanks.html`,
      cancel_url: `${process.env.SERVER_URL}/support.html`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})
app.listen(3000)
*/

app.post('/create-checkout-session', async (req, res) => {
    try {
      const { priceInCents, donationType } = req.body;
  
      // If it's a subscription, create a dynamic price
      let priceId = null;
      if (donationType === 'subscription') {
        const price = await stripe.prices.create({
          unit_amount: priceInCents,
          currency: 'usd',
          recurring: { interval: 'month' }, // Monthly billing
          product: 'prod_ROxvBG166SCn04', // Replace with a valid product ID
        });
        priceId = price.id;
      }
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: donationType,
        line_items: donationType === 'subscription'
          ? [
              {
                price: priceId, // Use the dynamically created price ID
                quantity: 1,
              },
            ]
          : req.body.items.map((item) => ({
              price_data: {
                currency: 'usd',
                product_data: {
                  name: storeItems.get(item.id).name,
                },
                unit_amount: priceInCents,
              },
              quantity: item.quantity,
            })),
        success_url: `${process.env.SERVER_URL}/thanks.html`,
        cancel_url: `${process.env.SERVER_URL}/support.html`,
      });
  
      res.json({ url: session.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  app.listen(3000)