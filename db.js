var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/xyinc');
mongoose.Promise = global.Promise;