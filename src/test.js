const dotenv = require('dotenv')
dotenv.config({silent: true})
const axios = require('axios');

const API_KEY = process.env.API_KEY

const run = async () => {
    const query = 'Sucker Punch'
    return (await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)).data
}
run().then(console.log).catch(console.error)

