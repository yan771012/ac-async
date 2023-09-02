const express = require('express')
const {Product, Customer} = require('../../models')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/productList', async (req, res) => {
  let products = await Product.findAll({raw: true})
  res.render('productList', {products})
})
//
// router.get('/customerList', async (req, res) => {
//   let customers = await Customer.findAll({raw: true})
//   let products = await Product.findAll({raw: true})
//
//   customers = customers.map(customer => {
//     let favoriteProduct = products.find(product => customer.favoriteId === product.id)
//     customer.productName = favoriteProduct.name
//     return customer
//   })
//
//   //模擬其他資料邏輯處理
//   await saveUserLog()
//
//   res.render('customerList', { customers })
// })


//case 2
router.get('/customerList', async (req, res) => {
  let customers = await Customer.findAll({raw: true})

  for (const customer of customers) {
    let favoriteProduct = await Product.findByPk(customer.favoriteId, {raw: true})
    customer.productName = favoriteProduct.name
  }

  //模擬其他資料邏輯處理
  await saveUserLog()

  res.render('customerList', {customers})
})


function saveUserLog() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 0)
  })
}

module.exports = router
