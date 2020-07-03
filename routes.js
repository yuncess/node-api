// 加载路由控制
var indexRouter = require('./controllers/users');

module.exports = [
  {
    url: '/',
    target: indexRouter,
  },
];
