'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');

// Cau hinh public static folder
app.use(express.static(__dirname + '/public'));

// Cau hinh su dung express handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defautlLayout: 'layout'
}));
app.set('view engine', 'hbs');

// Routes
app.use('/', require('./routes/indexRouter'));
app.use((req, res, next) => {
    res.status(404).render('error', { message: 'File not found'});
})
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).render('error', { message: 'Internal Server Error'});
})

// Khoi dong web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

