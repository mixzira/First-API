import express from 'express' // Importing express module.
import db from './database/mongoose.js'
import books from './database/models/book.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Connection error!'))
db.once('open', () => {
    console.log('Data base connection is sucefull!')
})

const app = express()

app.use(express.json())

routes(app)

/*const books = [ // Creating an Array with Books 
    {
        id: 1,
        "title": "Lord of the Rings"
    },
    {
        id: 2,
        "title": "I'm the Legend"
    }
]*/

app.get('/books/:id', (req, res) => { // Search for a specific book in the variable.
    let index = searchBook(req.params.id) // Search position of the book indicated in the request.
    res.json(books[index]) // Returns only the content of the searched book.
})

app.post('/books', (req, res) => { // Indicates data to be added from a request.
    books.push(req.body) // Adds request content to books variable.
    res.status(201).send('The book has been successfully registered.') // Replies operation success. 
})

app.put('/books/:id', (req, res) => {  // Changes the book data indicated in the parameters.
    let index = searchBook(req.params.id) // Search position of the book indicated in the request.
    books[index].title = req.body.title // Change book title.
    res.json(books) // Returns variable with the changed data.
})

app.delete('/books/:id', (req, res) => { // Delete a specific data.
    let {id} = req.params // Deconstructing parameters and adding the variable.
    let index = searchBook(id) // Search position of the book indicated in the request.
    books.splice(index, 1) // Deleting specific data.
    res.send(`Book ${id} removido com sucesso!`) // Sending confirmation of deleted data.
})

function searchBook(id) { // Search the book based on the parameters offered based on the condition equal to the one provided.
    return books.findIndex(books => books.id == id)
}

export default app // Creating an export for the content of this script.