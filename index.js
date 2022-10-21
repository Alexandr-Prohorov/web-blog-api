const express = require('express')
const userRouter = require('./Routes/user.routes')
const postRouter = require('./Routes/post.routes')
const { Sequelize } = require('sequelize');

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use('/api' , userRouter)
app.use('/api' , postRouter)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
