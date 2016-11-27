//Package入口文件
var klass = require('./klass');

exports.add = function(klasses) {
	klasses.forEach(function(item) {
		klass.add(item.teacher, item.students);
	});
};

// klass.add('Scott', ['白富美', '高富帅']);
