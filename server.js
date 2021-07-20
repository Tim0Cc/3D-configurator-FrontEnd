if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', error => console.error(error))
mongoose.connection.once('open', () => console.log('Database connection established'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/frontend')

app.use(express.static('frontend'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/index.html'))
})

app.listen(process.env.PORT || 3000)