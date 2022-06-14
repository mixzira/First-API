const http = require('http') // Requires standard HTTP protocol module.
const port = '3000' // Setting default port used by local server.
const routs = { // Creating routes to our API.
    '/': 'First API',
    '/books': 'I entered the book page',
    '/authors': 'I entered the authors page',
    '/categories': 'I entered the categories page'
}

const server = http.createServer((req, res) => { // Creating server and defining request and response parameters.
    res.writeHead(200, {'Content-Type': 'text/plain'}) // Defining response type.
    res.end(routs[req.url]) // Finalizing response and delivering content.     
})

server.listen(port, () => { // Listening to server and generating console log.
    console.log(`Servidor escutando em http://localhost:${port}`)
})