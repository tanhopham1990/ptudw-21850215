'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Cau hinh public static folder
app.use(express.static(__dirname + '/public'));

// Khoi dong web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

