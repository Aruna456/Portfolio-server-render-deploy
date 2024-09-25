require('dotenv').config()
const express = require('express')
const cors=require('cors')
const app = express()
const dbConn = require('./config/db')
const Projects = require('./routes/projectRoutes')
const User=require('./routes/userRoutes')
app.use(express.json())

// const dotenv = require('dotenv')
// dotenv.config()
app.use(cors())
const port = process.env.PORT || 7778
app.use('/projects', Projects)
app.use('/User',User)

app.get('/', (req, res) => {
    res.status(400).json("Welcome")
})

app.listen(port, () => {
    console.log(`Server running in  http://localhost:${port}`)
})