const express = require('express')
const app = express()

app.use((req, res) => {
  res
    .set('Content-Type', 'text/html; charset=UTF-8')
    .send('HOI!! your ip is: ' + req.ip + '!!<hr />hosted by Deplux')
})

app.listen(process.env.PORT)
