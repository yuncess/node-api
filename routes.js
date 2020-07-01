// 加载路由控制
var indexRouter = require('./controllers/index');

module.exports = [
  {
    url: '/',
    target: indexRouter,
  },
];
