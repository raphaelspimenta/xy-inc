var chai = require('chai');
var server = require('../server');
var chaiHttp = require('chai-http');
var Coordinate = require('../models/coordinate');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Coordinate', function(){
    before(function(next){
        Coordinate.remove({}, function(err){
            next();
        });
    });
    after(function (done) {
        server.close();
        done();
    });

    it('New Coordinate', function(done){
        var newCoordinate = {
            "name": "Lanchonete",
            "geometry": {
                "type": "Point",
                "coordinates": [27,12]
            }
        };
        chai.request(server)
        .post('/api/coordinate')
        .send(newCoordinate)
        .end(function(err,res){
            res.should.have.status(200);
            res.body.should.have.property('coordinate');
            res.body.coordinate.should.have.property('_id');
            res.body.coordinate.should.have.property('name');
            res.body.coordinate.should.have.property('geometry');
            res.body.coordinate.geometry.should.have.property('type');
            res.body.coordinate.geometry.should.have.property('coordinates');
            done();
        });
    });

    it('Get all Coordinates', function(done){
        chai.request(server)
        .get('/api/coordinate')
        .end(function(err,res){
            expect(res.body).to.be.a('array');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('name');
            res.body[0].should.have.property('geometry');
            res.body[0].geometry.should.have.property('type');
            res.body[0].geometry.should.have.property('coordinates');
            done();
        });
    });

    it('Get near Coordinates by d-max', function(done){
        chai.request(server)
        .get('/api/getnear?lng=20&lat=10&dmax=100')
        .end(function(err, res){
            expect(res.body).to.be.a('array');
            res.body[0].should.have.property('dis');
            res.body[0].should.have.property('obj');
            res.body[0].obj.should.have.property('_id');
            res.body[0].obj.should.have.property('name');
            res.body[0].obj.should.have.property('geometry');
            res.body[0].obj.geometry.should.have.property('type');
            res.body[0].obj.geometry.should.have.property('coordinates');
            done();
        });
    });
});