const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const transactions = require('./routes/transactions')

dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api/transactions',transactions)


app.listen(process.env.PORT,()=> console.log(`Server is started on port ${process.env.PORT}`) )