const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//const operacionesRouter = require('./routes/operacionesRouter')
//const usersRouter = require('./controllers/userController')

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/operaciones', require('./routes/operacionesRouter'))
app.use('/users', require('./routes/userRouter'))

app.listen(app.get('port'), () => {
    console.log("http://localhost:"+app.get('port'))
})