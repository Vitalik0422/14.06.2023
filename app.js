const express = require('express')
const server = express()
const ejs = require('ejs')
const adminRouter = require('./routes/admin')
const articlesRouter = require('./routes/articles')
const articlesListRouter = require('./routes/articlesList')
const genreModel = require('./models/genre')

const PORT = 7000;

server.set('view engine', 'ejs')
server.set('views',__dirname + '/views');
server.use(express.static(__dirname + '/public'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))

// server.get('/', (req,res)=> {
//     res.redirect('/createauthor')
// })

server.use('/', adminRouter)
server.use('/', articlesRouter)
server.use('/', articlesListRouter)

server.listen(PORT)


