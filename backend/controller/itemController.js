const { nextTick } = require('async')
var Item = require('../models/itemmodel')

exports.getItemList = function(req, res, next) {
    Item.find({}).exec(function(err, list_items) {
            if (err) {
                return next(err) 
            }
            res.json(list_items)
        })
}

exports.getItem = function(req, res, next) {
    Item.findById(req.params.id).exec(function(err, item) {
        if (err) {
            return next(err)
        }
        res.json(item)
    })
}