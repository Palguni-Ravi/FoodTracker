const express = require('express')
const app = express()
const bodyParser= require('body-parser')

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/kaleyra", {useNewUrlParser : true , useUnifiedTopology : true, autoIndex:true});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection error : "));
db.once("open",()=>{
    console.log("Connected to database successfully..!");
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

const homeRouter = require('./routes/home.js')
app.use('/',homeRouter)

app.listen('4000',()=>{
    console.log("Server listening at port 3000..!")
})