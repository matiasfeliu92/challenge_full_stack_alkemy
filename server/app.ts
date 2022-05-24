import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

// app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT"
}

app.use(cors(corsOptions))

// app.use('/operaciones', require('./routes/operacionesRouter'))
// app.use('/users', require('./routes/userRouter'))

app.listen(4000, () => {
    console.log("http://localhost:"+4000)
})