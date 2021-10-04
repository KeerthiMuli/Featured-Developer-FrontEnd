const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

var cors = require('cors');

const app = express()


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use(cors());

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.get('/developers', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send({
        developers: "The way to get started is to quit talking and begin doing."
    });
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)