import books from './../database/models/book.js'

class booksController {
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static registerBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Failed to register book!`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }
}

export default booksController