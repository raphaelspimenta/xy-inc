const express = require('express');
const router = express.Router();
const validator = require('express-validator');
router.use(validator());
const Coordinate = require('../models/coordinate');

router.get('/', function(req, res, next){
    res.send("XY-Inc Services");
});

router.get('/coordinate', function(req, res, next){
    Coordinate.find({}).then(function(coordinates){
        res.send(coordinates);
    }).catch(next);
});

router.get('/getnear', function(req, res, next){
    if (!req.query.lng || !req.query.lat || !req.query.dmax) {
        res.send( [{"error":"Missing data"}] );
    }
    req.checkQuery("lng", "Lng not valid").isInt();
    req.checkQuery("lat", "Lat not valid").isInt();
    req.checkQuery("dmax", "Max distance not valid").isInt();
    var errors = req.validationErrors();
    if (errors) { res.send(errors); return; }

    var point       = { type : "Point", coordinates : [+req.query.lng, +req.query.lat] },
        maxDistance = +req.query.dmax * 100000;

    Coordinate.geoNear(point, { maxDistance: maxDistance, spherical: true }, function(err, results, stats) {
        if ( err ) {
            res.send([]);
        }
        if ( results.length === 0 ) {
            res.send([]);
        }
        else {
            res.send(results);
        }

    });

});

router.post('/coordinate', function(req, res, next){
    req.checkBody("name", "Name is not valid").isString();
    req.checkBody("geometry", "Geometry is not valid").notEmpty();

    var errors = req.validationErrors();
    if (errors) { res.send(errors); return; }

    Coordinate.create(req.body).then(function(coordinate){
        res.send({ "coordinate": coordinate });
    }).catch(next);
});

router.put('/coordinate', function(req, res, next){
    Coordinate.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
        Coordinate.findOne( {_id: req.params.id } ).then(function(coordinate){
            res.send({ "coordinate": coordinate });
        });
    }).catch(next);
});

module.exports = router;