const Cookie = require('./cookie')

const cookieString = 'test=23333'
const docCookies = new Cookie(cookieString)

console.log(docCookies.getItem('test'));
