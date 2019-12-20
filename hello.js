// Ends response to HTTP request with "hello world"
function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
 }
 module.exports = hello;