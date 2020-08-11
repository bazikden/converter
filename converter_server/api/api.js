const Axios = require('axios')

const config = {
    headers: {
        "Authorization": "Basic ZGVuaXMuYmF6aWxldnNreUBxYmV4LmlvOjE1OTc1M3Fheg==",
    }
}

const api = Axios.create({
    baseURL:"https://7np770qqk5.execute-api.eu-west-1.amazonaws.com/prod",
    headers: {
        "Authorization": "Basic ZGVuaXMuYmF6aWxldnNreUBxYmV4LmlvOjE1OTc1M3Fheg==",
    }
})

class TransactionsApi {
    static async get(req, res) {
        try {
            const response = await api.get('/get-transaction')
            return response.data
        } catch (error) {

            res.status(500).json({ error })
        }
    }

    static async post(req,res,data) {
        const sendData = {
            transactions:data
        }
        try{
            const response = await api.post('/process-transactions',sendData)
            console.log("response",response.data)
            res.json({data:response.data})
        }catch(error){
            res.status(500).json({ error })
        }
    }
}

class ExchangeApi {
    static async get(url, currency) {
        try {
            const response = await Axios.get(url,config)
            const rate = response.data.rates[currency]
            return rate
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = { TransactionsApi, ExchangeApi }