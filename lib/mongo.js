var config = require('config-lite')(__dirname);
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect(config.mongodb);

// 个人信息
exports.User = mongolass.model('user', {
	name: { type: 'string' },
	password: {type: 'string'},
	avatar: { type: 'string'},
	gender: { type: 'string', enum: ['m', 'f', 'x']},
	bio: { type: 'string' }
});

exports.User.index({ name: 1 }, { unique: true }).exec(); //根据用户名找到用户，用户名全局唯一