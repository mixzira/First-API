import mongoose from 'mongoose'
import config from './../../config.js'

mongoose.connect(config.db)

let db = mongoose.connection

export default db