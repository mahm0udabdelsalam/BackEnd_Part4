const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


// blogsRouter.get('/', (req, res) => {
//   res.send('<h1>Welcome To My Blog</h1>')
// })

blogsRouter.get('/', (req, res) => {
    Blog
      .find({})
      .then(blogs => {
        res.json(blogs)
      })
})
  
blogsRouter.post('/', (req, res) => {
    const blog = new Blog(req.body)

    blog
        .save()
        .then(result => {
        res.status(201).json(result)
        })
})

module.exports = blogsRouter