import express from 'express'
import booksController from '../controllers/booksController.js'

const router = express.Router()

router
    .get('/books', booksController.listBooks)
    .get('/books/:id', booksController.listBookById)
    .post('/books', booksController.registerBook)
    .put('/books/:id', booksController.updateBook)
    .delete('/books/:id', booksController.deleteBook)

export default router    