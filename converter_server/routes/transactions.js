const { getTransactions, postTransactions } = require('../controllers/transactions')

const router = require('express').Router()

router
    .route('/')
    .get(getTransactions)
    .post(postTransactions)


module.exports = router