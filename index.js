const express = require('express')
const app = express()

app.use((req, res) => {
  res
    .set('Content-Type', 'text/html; charset=UTF-8')
    .send(
      'HOI!! your ip is: ' + req.ip + '!!<hr />' +
      'hosted by Deplux<br />' +
      'Envvars: <ul>' + Object.keys(process.env).reduce((prev, curr) => `${prev}\n<li>${curr} : ${process.env[curr]}</li>`, '') + '</ul>')
})

app.listen(process.env.PORT)
