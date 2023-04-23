const express = require('express');
const cookieParser = require('cookie-parser');

const app= express();
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/setcookies', (req, res) => {
    res.cookie('name', "Ankit Jha")
    res.send("Seted")
    })
app.get('/getcookies', (req, res) => {
    
    res.send(req.cookies)
})
app.get('/delcookies', (req, res) => {
    res.clearCookie('name')
    res.send('Hello World!!')
})

app.listen(3000, () => {
    console.log('Server started!!');
})