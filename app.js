//import module
require('router').config
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6500
//view engine
app.set('views','./views')
app.set('view engine','ejs')
//static
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'/public/css'))
app.use('/js', express.static(__dirname+'/public/js'))
app.use('/img', express.static(__dirname+'/public/img'))


app.get('',(req,res)=>{
    res.render('index',{ title: 'hi narci'})
})

app.get('/about',(req,res)=>{
    res.render('about',{ title: 'hici'})
})

app.listen(PORT,()=>console.log(`server running at port ${PORT}`))