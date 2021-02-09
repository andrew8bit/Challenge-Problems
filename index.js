// 1 - Enviroment
require('dotenv').config();

// 2 - Imports
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const { render } = require('ejs');

// 3 - App set up
const app = express();
app.set( 'view engine', 'ejs');

// 4 - App Middlewhere (app.use)
app.use(express.static(__dirname + '/public/'))
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false }));
app.use(methodOverride('_method'));

// 5 - Routes (controllers)
app.get('/', (req, res) => {
    res.send('Welcome to my app')
})

app.get('/post/new', (req, res) => {
    res.render('show', {})
})

app.post('/post/new', (req, res) => {
    
    res.render('show', {})
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})