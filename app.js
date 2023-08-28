const express = require("express")
const cors = require('cors')
//Cross origin resource sharing

const app = express(); // express is a function, by calling the express function we get the app object

app.use(express.json()) // app.use this is a middleware..and express.json() er kaj holo..req er koar somoy 
// j data ta dei seta req er body te dawa
app.use(cors())


module.exports = app;