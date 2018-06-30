const express = require('express')
const keys = require('./config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

const app = express()
const port = process.env.PORT || 5000

// Get list of customers
app.get('/customers', (req, res) => {
  stripe.customers.list((err, customers) => {
    if (err) console.log(err)
    res.send(customers)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
