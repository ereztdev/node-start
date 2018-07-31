const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios');
const fs = require('fs');
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors({origin: 'http://localhost:8080'}));

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
    app.get('/test', (req,res) =>{
        res.json({ message: 'hooray! welcome to our api!' });
    });

    app.get('/api/coins_rate', (req, res) => {

        let coinsFrom = req.query.coinsFrom;
        let coinsTo = req.query.coinsTo;
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + coinsFrom + '&tsyms=' + coinsTo)
            .then(response => {
                let rates = response.data;
                res.json(rates);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.get('/api/coin_list', (req, res) => {
        axios.get('https://api.coinmarketcap.com/v2/listings/')
            .then(response => {
                let list = response.data;
                res.json(list)
            })
            .catch(error => {
                console.log(error)
            })
    });
});

