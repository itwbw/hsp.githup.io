console.log('hello, nodejs')

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    if (req.url === '/hello') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World\n')
    } else if (req.url === '/hi') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('hi World\n')
    }


})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})