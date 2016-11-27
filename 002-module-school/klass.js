var student = require('./student');
var teacher = require('./teacher');

var add = function(teacherName, students) {
	teacher.add(teacherName);
	students.forEach(function(item) {
		student.add(item);
	});	
};

exports.add = add;