const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.listen(app.get('port'), () => {
    console.log("http://localhost:"+app.get('port'))
})