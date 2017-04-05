var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var profiles = [
    {
        name: 'Sue',
        age: 22,
        hobbies: ['comp', 'matma']
    },
    {
        name: 'Tom',
        age: 223,
        hobbies: ['biologia', 'muzyka']
    }
]

app.get('/profiles', (req, res) => {
    res.json(profiles)
})

app.listen(3000, () => console.log('listening'))