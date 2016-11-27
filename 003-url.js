// http://www.imooc.com:8080/course/list?username=scott&password=123456#field

/*

 > url
{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  Url: [Function: Url] }

  */

/*
> url.parse('http://www.imooc.com/course/list')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com',
  port: null,
  hostname: 'www.imooc.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/course/list',
  path: '/course/list',
  href: 'http://www.imooc.com/course/list' }
 */

/*
> url.parse('http://www.imooc.com:8080/course/list?username=scott&password=123456#field')
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8080',
  port: '8080',
  hostname: 'www.imooc.com',
  hash: '#field',
  search: '?username=scott&password=123456',
  query: 'username=scott&password=123456',
  pathname: '/course/list',
  path: '/course/list?username=scott&password=123456',
  href: 'http://www.imooc.com:8080/course/list?username=scott&password=123456#field' }
*/
/*
> url.parse('http://www.imooc.com:8080/course/list?username=scott&password=123456#field', true)
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8080',
  port: '8080',
  hostname: 'www.imooc.com',
  hash: '#field',
  search: '?username=scott&password=123456',
  query: { username: 'scott', password: '123456' }, //返回对象
  pathname: '/course/list',
  path: '/course/list?username=scott&password=123456',
  href: 'http://www.imooc.com:8080/course/list?username=scott&password=123456#field' }
 */

/*
> url.format({protocol: 'http:',
... slashes: true,
... auth: null,
... host: 'www.imooc.com:8080',
... port: '8080',
... hostname: 'www.imooc.com',
... hash: '#field',
... search: '?username=scott&password=123456',
... query: { username: 'scott', password: '123456' },
... pathname: '/course/list',
... path: '/course/list?username=scott&password=123456',
... href: 'http://www.imooc.com:8080/course/list?username=scott&password=123456#field' })
'http://www.imooc.com:8080/course/list?username=scott&password=123456#field'
*/

/*
> url.resolve('http://imooc.com/', '/course/list');
'http://imooc.com/course/list'
*/

/* 不带协议的url解析
> url.parse('//imooc.com/course/list', true, true);
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'imooc.com',
  port: null,
  hostname: 'imooc.com',
  hash: null,
  search: '',
  query: {},
  pathname: '/course/list',
  path: '/course/list',
  href: '//imooc.com/course/list' }
 */
