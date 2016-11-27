// > querystring.stringify({name:'scott', course:['jade', 'node'], from:''})
// 'name=scott&course=jade&course=node&from='


// > querystring.stringify({name:'scott', course:['jade', 'node'], from:''}, ',',':')
//'name:scott,course:jade,course:node,from:'

//> querystring.parse('name=scott&course=jade&course=node&from=')
//{ name: 'scott', course: [ 'jade', 'node' ], from: '' }

//> querystring.parse('name:scott,course:jade,course:node,from:',',',':');
//{ name: 'scott', course: [ 'jade', 'node' ], from: '' }