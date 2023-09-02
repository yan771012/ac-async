const express = require('express')
const {Product, Customer} = require('../../models')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/productList', (req, res) => {
  let products = []
  Product
    .findAll({raw: true})
    .then(ps => {
      products = ps
    })

  res.render('productList', {products})
})

router.get('/customerList', (req, res) => {
  Customer
    .findAll({raw: true})
    .then(customers => {
      customers.forEach(customer => {
        Product
          .findByPk(customer.favoriteId, {raw: true})
          .then(product => {
            customer.productName = product.name
          })
      })

      //模擬其他資料邏輯處理
      saveUserLog()
        .then(() => {
          res.render('customerList', {customers})
        })
    })
})

//correct
// router.get('/productList', (req, res) => {
//   Product
//     .findAll({raw: true})
//     .then(products => {
//       res.render('productList', { products })
//     })
// })
//
// router.get('/customerList', (req, res) => {
//   Customer
//     .findAll({raw: true})
//     .then(customers => {
//       Product
//         .findAll({raw: true})
//         .then(products => {
//           customers.forEach(customer => {
//             const favoriteProduct = products.find(product => customer.favoriteId === product.id)
//             customer.productName = favoriteProduct.name
//           })
//
//           //模擬其他資料邏輯處理
//           saveUserLog()
//             .then(() => {
//               res.render('customerList', { customers })
//             })
//         })
//     })
// })


function saveUserLog() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 0)
  })
}

module.exports = router
