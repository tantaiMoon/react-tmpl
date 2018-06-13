
const mongoose = require('mongoose');
// 连接MongoDB并使用appserver集合
const DB_URL = 'mongodb://localhost:27017/react-app';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function() {
  console.log('---------------------------------------- MongoDB Connect Success -----------------------');
});


const models = {
	// 用户信息
	user: {
		'user': {'type': String, 'require': true},
		'pwd': {'type': String, 'require': true},
		'type': {'type': String, 'require': true},
		// 头像
		'avatar': {'type': String},
		// 简介
		'desc': {'type': String},
		'title': {'type': String},
		// 猎人
		'company': {'type': String},
		'money': {'type': String},
	},
	// 聊天部分
	chat: {

	}
}


for (let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function (name) {
		return mongoose.model(name);
	}
}

