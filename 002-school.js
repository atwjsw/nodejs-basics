//将002-module-school作为一个包调用，入口函数是index.js
var school = require('./002-module-school');

klasses = [
{teacher: 'scott1', students:['白富美1', '高富帅1']},
{teacher: 'scott2', students:['白富美2', '高富帅2']}
];

school.add(klasses);