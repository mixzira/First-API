import express from 'express' // Importing express module.

const app = express()
const books = [ // Creating an Array with Books 
    {
        id: 1,
        "title": "Lord of the Rings"
    },
    {
        id: 2,
        "title": "I'm the Legend"
    }
]

app.get('/', (req, res) => { // Using express with no defined route.
    res.status(200).send('First API') // Returning simple text response.
})

app.get('/books', (req, res) => { // Creating a defined route for response.
    res.status(200).json(books) // Returning a Json array.
})

export default app // Creating an export for the content of this script.