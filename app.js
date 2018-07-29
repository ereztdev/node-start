const express = require("express");
const app = express();
const port = 3000;
const axios = require('axios');
const fs = require('fs');
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors({origin: 'http://localhost:8080'}));

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);


    app.get('/api/coins', (req, res) => {
        let coins = req.query.coins;
        console.log(coins);
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+ coins +'&tsyms=USD')
            .then(response => {
                let rates = response.data;
                res.json(rates);
            })
            .catch(error => {
                console.log(error);
            });
    })
});
    //yusuf async/await shorthand for get
    // app.get('/api/btc2', async (req, res) => {
    //     try {
    //         let response = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR');
    //         res.send(response.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // });
