const express = require('express')
const products_routes = require('./routes/products.js')
const slugify = require('slugify')

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('/views'))

//Midleware
app.use(express.json())
app.use('/', products_routes)

const originalMessage = "Welcome to my Express server"
const slugMessage = slugify(originalMessage, { replacement: '*', lower: false })
console.log("Mensaje slugizado:", slugMessage)

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
