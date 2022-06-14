import express from 'express'
import booksController from '../controllers/booksController.js'

const router = express.Router()

router
    .get('/books', booksController.listBooks)
    .post('/books', booksController.registerBook)

export default router    