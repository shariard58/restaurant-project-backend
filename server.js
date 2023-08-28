// connect mongodb
// run the server

const app = require("./app")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
// etar jnno sob module gula .env file er variable gular access pabe 




mongoose.connect(process.env.MONGODB_SERVER, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=> console.log("Connected MongoDb successfully , Yes")).catch(err=>console.log("MongoDb Connection failed"))


const port = process.env.PORT || 3001;

app.listen(port , ()=> 
{
   console.log(`listening on port ${port}`)
})