var express = require('express');
var client = require('../lib/client').client;
var router = express.Router();
const dbName = 'demo1';

router.post('/add', function (req, res, next) {
  var json = req.body;
  console.log(req.body);
  client.connect((err) => {
    const db = client.db(dbName);
    db.collection('babies').insertOne(json, function (error, result) {
      if (error) {
        console.log('insert database faile');
      }
      res.setHeader('Content-type', 'application/json;charset=utf-8');
      res.json({ data: true });
      res.end();
      console.log('insert database successfully');
    });
  });
});

module.exports = router;
