const fetch = require ('node-fetch')

async function go() {
  console.log('g1')
  await sendDelayRequest()
  console.log('g2')
}

async function sendDelayRequest() {
  console.log('d1')
  await fetch('https://httpbin.org/delay/5')
  console.log('d2')
}


go()
