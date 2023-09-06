const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/:query/:startIndex', async (req, res) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${req.params.query}&start=${req.params.startIndex}`);
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get('/images/:query/:startIndex', async(req, res) => {
    try{
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${req.params.query}&searchType=image`)
        res.json(response.data) ;
    }
    catch(error){
        console.log(error)
    }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
