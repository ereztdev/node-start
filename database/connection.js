var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'alpha-crm'

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "select * from admin_users where id = 17";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
    });
});