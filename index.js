const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const db = require('./config/mongoose');
const User = require('./models/user');
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.get('/', function (req, res) {
    return res.sendFile(__dirname + '/index.html')
})
app.post('/', async function (req, res) {
    console.log(req.body.message);
    let user = await User.create(req.body);
    try {
        user.save();
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return res.redirect('back');

    }
})

app.listen(port, function () {
    console.log(`Server running on Port ${port}`);
})