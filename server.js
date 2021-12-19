const express= require('express')
const path = require('path')
const app = express()


app.set('view engine', 'ejs')

app.use('/static',express.static(path.join))
app.get('/', (req,res) =>{


    res.render('home',{title: " Login System"})
})


app.listen(3000)