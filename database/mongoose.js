//Import the mongoose module
let mongoose = require('mongoose');
let configMlab = {
    dbuser: 'erezta',
    dbpassword: 'erez1234',
};
let jest = 'mongo ds259361.mlab.com:59361/erez -u erezta -p erez1234';
let settings = {
    reconnectTries : Number.MAX_VALUE,
    autoReconnect : true
};
//Set up default mongoose connection
let mongoDB = 'mongodb://127.0.0.1:27017/my_database';
// let mongoDB = `mongodb://${configMlab.dbuser}:${configMlab.dbpassword}@ds259361.mlab.com:59361/erez`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let Schema = mongoose.Schema;

let SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
let SomeModel = mongoose.model('SomeModel', SomeModelSchema );
