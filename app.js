const express = require('express')
const {engine} = require('express-handlebars')
const hbshelpers = require('handlebars-helpers')

const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')


app.engine('handlebars', engine({ defaultLayout: 'main', helpers: hbshelpers() }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`The app is run on http://localhost:${port}`)
})
