const express= require('express')
const path = require('path')
const app = express()


app.set('view engine', 'ejs')

app.use('/static',express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.get('/', (req,res) =>{


    res.render('home',{title: " Login System"})
})


app.listen(3000)
