const express = require('express');
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.static(path.resolve("public")));

const mainRoutes = require('./routes/mainRoutes')

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use('/', mainRoutes)

const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log("Server is listening at port", port)
})
