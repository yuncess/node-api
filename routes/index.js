var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function (req, res, next) {
  var json = req.body.content;
  client.connect((err) => {
    const db = client.db(dbName);
    db.collection('babies').insertOne({ name: '小南瓜', age: 1.5 }, function (
      error,
      result
    ) {
      if (error) {
        console.log('insert database faile');
      }
      console.log('insert database successfully');
      client.close();
    });
  });
});

module.exports = router;
