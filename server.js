const express = require('express')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const stripe = require('stripe')(keys.stripeSecretKey)

const app = express()

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Get list of customers
app.get('/customers', (req, res) => {
  stripe.customers.list((error, customers) => {
    if (error) throw Error(error)
    res.send(customers)
  })
})

// Create new customer
app.post('/add', (req, res) => {
  stripe.customers.create(
    {
      metadata: {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      },
      email: req.body.email,
      description: req.body.description,
      account_balance: req.body.accountBalance,
    },
    (error, customer) => {
      if (error) throw Error(error)
      res.send(customer)
    },
  )
})

// Delete user
app.delete('/delete', (req, res) => {
  stripe.customers.del(req.body.id.toString(), (error, confirmation) => {
    if (error) throw Error(error)
    res.send(confirmation)
  })
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))
