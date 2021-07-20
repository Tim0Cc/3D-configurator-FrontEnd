if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

const Cuboid = require('./models/cuboid')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', error => console.error(error))
mongoose.connection.once('open', () => console.log('Database connection established'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/frontend')

app.use(express.static('frontend'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const cuboid = new Cuboid()
  res.render('./index', { cuboid })
})

app.post('/', async (req, res) => {
  const cuboid = new Cuboid({
    name: req.body.name,
    position: req.body.position,
    color: req.body.color,
    width: req.body.width,
    height: req.body.height,
    depth: req.body.depth
  })
  console.log(req.body)
  console.log(cuboid)
  try {
    cuboid.save()
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.listen(process.env.PORT || 3000)