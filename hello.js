// Ends response to HTTP request with "hello world"
function hello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World!');
    next();
 }
 module.exports = hello;