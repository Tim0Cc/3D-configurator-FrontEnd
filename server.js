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
  try {
    cuboid.save()
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.get('/projects', async (req, res) => {
  try {
    const cuboids = await Cuboid.find({})
    res.render('./projects', { cuboids })
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.get('/:id', async (req, res) => {
  let cuboid
  try {
    cuboid = await Cuboid.findById(req.params.id)
    res.render('./show', { cuboid })
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.put('/:id', async (req, res) => {
  let cuboid
  try {
    cuboid = await Cuboid.findById(req.params.id)
    cuboid.name = req.body.name
    cuboid.position = req.body.position
    cuboid.color = req.body.color
    cuboid.width = req.body.width
    cuboid.height = req.body.height
    cuboid.depth = req.body.depth
    await cuboid.save()
    res.render('./show', { cuboid })
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.delete('/projects/:id', async (req, res) => {
  let cuboid
  try {
    cuboid = await Cuboid.findById(req.params.id)
    await cuboid.remove()
    res.redirect('/projects')
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

app.listen(process.env.PORT || 3000)