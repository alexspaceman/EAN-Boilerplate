var express = require('express')
var path = require('path')

var app = express()

var router = express.Router()
var scriptRouter = express.Router()
var templateRouter = express.Router()

var port = process.env.PORT || 8080


// MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.method, req.url)
  next()
})


// ROUTES
// index
router.get('/', function (req, res) {
  res.sendFile(path.resolve('./index.html'), {}, function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded index')
    }
  })
})

// scripts
scriptRouter.get('/app.build.js', function (req, res) {
  res.sendFile(path.resolve('./build/app.build.js'), {}, function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded app.build.js')
    }
  })
})

// templates
templateRouter.get('/mainView.html', function (req, res) {
  res.sendFile(path.resolve('./templates/mainView.html'), {}, function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded main view')
    }
  })
})


// USER ROUTER
app.use('/', router)
app.use('/scripts', scriptRouter)
app.use('/templates', templateRouter)


// START THE SERVER
app.listen(port)
console.log('listening on port ', port)