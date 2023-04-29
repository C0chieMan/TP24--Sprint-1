var async = require('async')

var Item = require('./models/itemmodel')

var mongoose = require('mongoose');
var mongoDB = 'psi024:psi024@localhost:27017/psi024?retryWrites=true&authSource=psi024';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = []

function itemCreate(itemName, itemDescription, itemImageURL, cb) {
    itemDetail = {
        name: itemName,
        description: itemDescription,
        imageURL: itemImageURL
    };

    var item = new Item(itemDetail);

    item.save(function(err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log("New Item: " + item);
        items.push(item)
        cb(null, item)
    });
}

function createItems(cb) {
    async.series([
        function(callback) {
            itemCreate(
                "Product 1",
                "This is the description for Product 1.",
                "https://via.placeholder.com/300x200",
                callback);
        },
        function(callback) {
            itemCreate(
                "Product 2",
                "This is the description for Product 2.",
                "https://via.placeholder.com/300x200",
                callback);
        },
        function(callback) {
            itemCreate(
                "Product 3",
                "This is the description for Product 3.",
                "https://via.placeholder.com/300x200",
                callback);
        },
        function(callback) {
            itemCreate(
                "Product 4",
                "This is the description for Product 4.",
                "https://via.placeholder.com/300x200",
                callback);
        },
        function(callback) {
            itemCreate(
                "Product 5",
                "This is the description for Product 5.",
                "https://via.placeholder.com/300x200",
                callback);
        },
    ], cb)
}

async.series([
    createItems
],

function(err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err)
    } else {
        console.log('Well done')
    }
    mongoose.disconnect();
});
