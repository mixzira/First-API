import app from './src/app.js'

const port = process.env.PORT || 3000 // Defining variable ports depending on the environment in which the server is running.

app.listen(port, () => { // Listening to server and generating console log.
    console.log(`Servidor escutando em http://localhost:${port}`)
})