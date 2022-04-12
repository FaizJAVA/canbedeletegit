const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const userImport=require('./route/userroute');
const port=process.env.PORT||4000;
mongoose.connect('mongodb+srv://FaizaanKhan:123@canbedeletecluster.c3vig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(result=>{
    console.log('success');
}).catch(err=>{
    console.log(err);
})
const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/api/user/',userImport);
app.listen(port);