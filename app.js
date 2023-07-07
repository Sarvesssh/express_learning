const express = require('express')

const colors = require('colors')

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.get('/', (req, resp)=>{
    resp.send('<h2>express server has started</h2>')
    console.log(colors.red('express server has started'))
})
app.get('/about', (req, resp)=>{
    resp.send('about page....')
    console.log(colors.red('express server has started'))
})
app.get('/services', (req, resp)=>{
    resp.send('service page....')
    console.log(colors.red('express server has started'))
})


app.get('/data', (req, resp)=>{
    const tempObj={
        name:'sarvesh',
        age:123,
        status:false
    }
    resp.send(tempObj)
    console.log(colors.blue('express server has started'))
})

const productsRoute = require('./routes/products');
app.use('/products',productsRoute);


app.listen(4000);
