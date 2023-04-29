var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemModelSchema = new Schema({
    name: String,
    description: String,
    imageURL: String
});

ItemModelSchema
    .virtual('url')
    .get(function() {
        return '/Item/' + this._id;
    });

module.exports = mongoose.model('ItemModel', ItemModelSchema);