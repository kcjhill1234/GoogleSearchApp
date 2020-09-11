const router = require('express').Router();
const axios = require('axios');


router.get('/api/search/', async (req, res) => {
    const { q } = req.query;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${process.env.API_KEY}`)
        .catch(error => {
            console.log(error.response)
        })
    console.log('Items: ', response.data.items.length)
    console.log('Query ', q)
    const results = response.data.items.map((result) => {
        return {
            title: result.volumeInfo.title,
            subtitle: result.volumeInfo.subtitle,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.previewLink
        }
    })
    res.json(results)
})


module.exports = router