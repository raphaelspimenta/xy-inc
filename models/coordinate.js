const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const CoordinateSchema = new Schema({
    name: {
        type: String
    },
    geometry: GeoSchema
});

const Coordinate = mongoose.model('coordinate', CoordinateSchema);
module.exports = Coordinate;