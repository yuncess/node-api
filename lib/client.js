const mongodb = require('mongodb');
const client = new mongodb.MongoClient('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

exports.client = client;
