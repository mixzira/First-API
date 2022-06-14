import books from './../database/models/book.js'

class booksController {
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }
}

export default booksController