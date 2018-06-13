const express = require('express');
const Router = express.Router();
const utility = require('utility');
const model = require('./model');
const User = model.getModel('user');

const _filter = {'pwd': 0, '__v': 0};
const app = express();

Router.get('/info', function(req, res){
  // 用户有没有cookie
  const {userid} = req.cookies;
  if (!userid) {
    return res.json({code: 1})
  }
  User.findOne({_id: userid}, _filter, (err, doc) => {
    if (err) {
      return res.json({code: 1, msg: '后端出错了'});
    }
    if (doc) {
      return res.json({code: 0, data: doc});
    }
  })
});


Router.get('/list', function (req, res) {
  // User.remove({}, (e, d) => {});
  User.find({}, (err, doc) => {
    return res.json(doc);
  });
});

// 使用post之前引入body-parser插件接收post参数
// 注册register
Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body;
  User.findOne({user: user,}, (err,doc) => {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'});
    }
  });
  const userModel = new User({user,pwd: md5Pwd(pwd), type});
  userModel.save((err, doc) => {
    if (err) {
      return res.json({code: 1, msg: '后端出错了'});
    }
    const {user, type, _id} = doc;
    res.cookie('userid', _id);
    return res.json({code: 0, data: {user, type, _id}});
  });
  /*User.create({user,pwd: md5Pwd(pwd), type}, (e, d) => {
    if (e) {
      return res.json({code: 1, msg: '后端出错'});
    }
    return res.json({code: 0});
  })*/
})

// 登录login
Router.post('/login', (req, res) => {
  const {user, pwd} = req.body;
  // {'pwd': 0}   不让pwd字段显示在结果中
  User.findOne({user: user,pwd: md5Pwd(pwd)}, _filter, (err,doc) => {
    if (!doc) {
      return res.json({code: 1, msg: '用户未注册或者密码错误'});
    }
    res.cookie('userid', doc._id);
    return res.json({code: 0, data: doc});
  });
  
})


let md5Pwd = (pwd) => {
  const salt = 'Wpb_react201806@bin.com';
  return utility.md5(utility.md5(pwd + salt));
}

module.exports = Router;