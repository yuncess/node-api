const mongodb = require('mongodb');
//(MongoClient类的实例是)一个带有内部连接池的MongoDB客户端
const client = new mongodb.MongoClient('mongodb://localhost:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

exports.client = client;
