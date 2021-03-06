var express = require('express');
const jwt = require('jsonwebtoken');
var client = require('../lib/client').client;
var router = express.Router();
const dbName = 'demo1';

router.post('/add', function (req, res, next) {
  var json = req.body;
  client.connect((err) => {
    const db = client.db(dbName);
    db.collection('users').insertOne(json, function (error, result) {
      if (error) {
        console.log('insert user faile');
      }
      res.setHeader('Content-type', 'application/json;charset=utf-8');
      res.json({ data: true });
      res.end();
      console.log('insert user successfully');
    });
  });
});

router.post('/login', function (req, res, next) {
  var params = req.body;
  client.connect((err) => {
    const db = client.db(dbName);
    const users = db.collection('users'); //users
    if (!params.name) {
      res.send({ data: false, message: '用户名不能为空' });
    } else {
      users.findOne({ name: params.name }, function (error, result) {
        if (params.psd === result.psd) {
          let token = jwt.sign(result.name, result.psd);
          users.updateOne({ name: params.name }, { $set: { token } });
          res.send({ data: true });
        } else {
          res.send({ data: false, message: '密码错误' });
        }
      });
    }
  });
});

router.get('/delete/:name', function (req, res, next) {
  const name = req.params.name;
  client.connect((err) => {
    const db = client.db(dbName);
    const users = db.collection('users'); //users
    users.deleteOne({ name }, (error, result) => {
      if (error) {
        console.log('delete user faile');
      } else {
        res.send({ data: true });
        console.log('delete user successfully');
      }
    });
  });
});

router.get('/quary', function (req, res, next) {
  client.connect((err) => {
    const db = client.db(dbName);
    const users = db.collection('users'); //users
    let cursor = users.find();
    cursor.toArray((error, documents) => {
      res.send({
        data: documents,
      });
    });
  });
});

module.exports = router;
