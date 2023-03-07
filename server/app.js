const express = require('express')
const cors = require('cors')
const { postPrompt } = require('./controllers/promptsController')
// const AppError = require('./utils/AppError')
// const { StatusCodes } = require('http-status-codes')

// const globalErrorHandler = require('./middlewares/globalErrorHandler')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', postPrompt)

// app.use('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, StatusCodes.NOT_FOUND))
// })

// app.use(globalErrorHandler)

module.exports = app
