import Axios from 'axios'

const api = Axios.create({
    baseURL:'http://localhost:5000/api/transactions',
    headers:{
        "Authorization":"Basic ZGVuaXMuYmF6aWxldnNreUBxYmV4LmlvOjE1OTc1M3Fheg=="
    }
})

class Api {
    static async getTransactions(){
        try {
            const transactions = await  api.get('/')
            return transactions
        } catch (error) {
            return error
        }
    }

    static async postTransactions(data){
        try {
            const checked = await api.post('/',data)
            return checked
        } catch (error) {
            return error
        }

    }
}

export {Api}