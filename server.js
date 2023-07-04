const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App running on port ${PORT}`))
app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/routes'))