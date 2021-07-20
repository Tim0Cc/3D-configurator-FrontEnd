const mongoose =  require('mongoose')

const CuboidSchema = new mongoose.Schema({
  position: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Cuboid', CuboidSchema)