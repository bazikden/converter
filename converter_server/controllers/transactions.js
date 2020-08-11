const { TransactionsApi, ExchangeApi } = require('../api/api')

const moment = require('moment')

const getTransactions = async (req, res) => {
    try{
        const response = await TransactionsApi.get(req, res)
        const urlData = moment(response.createdAt).format("YYYY-MM-DD")
        const url = response.exchangeUrl.replace(/Y-M-D/gi, urlData)
        const rate = await ExchangeApi.get(url,response.currency)
        const data = {
            "createdAt": response.createdAt,
            "currency": response.currency,
            "amount": response.amount,
            "convertedAmount": +(+response.amount/rate).toFixed(4),
            "checksum": response.checksum
        }
        res.json({data})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}

const postTransactions = async (req,res) => {
    const data = req.body
    await TransactionsApi.post(req,res,data)
}

module.exports = { getTransactions, postTransactions }