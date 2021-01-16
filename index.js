const express = require('express')
const app = express()

let count = 0

app.use((_, res) => {
  res
    .set('Content-Type', 'text/html; charset=UTF-8')
    .send(`Hello, world! you're ${toOrdinal(++count)} visitor!`)
})

app.listen(80)

function toOrdinal (number) {
  return number + (['st','nd','rd'][((number + 90) % 100 - 10) % 10 - 1] ||'th')
}
