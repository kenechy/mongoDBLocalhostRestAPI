const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const url = "mongodb://127.0.0.1:27017/admin";
const port = "3000";

mongoose.connect(url, {})
.then(result => console.log('Database Connected.....'))
.catch(err => console.log(err));

const PrintingpressRoute = require('./Route/Printingpress.route');
app.use('/printing', PrintingpressRoute);

const PrintingpressEmployerRoute = require('./Route/PrintingpressEmployer.route');
app.use('/printingEmployer', PrintingpressEmployerRoute);

app.listen(port, () => {
    console.log('listening on port 3000.....')
})