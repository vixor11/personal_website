const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const articleRouter = require('./routes/article-router')
const userRouter = require('./routes/user-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

var session = require('express-session')
app.use(express.static(__dirname));
app.use(session({
    secret: 'secretKey', 
    cookie: { maxAge: 1296000000 },
    resave: false, 
    saveUninitialized: false,
    // cookie: { secure: true }
}));


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/api', articleRouter)
app.use('/api/user', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))