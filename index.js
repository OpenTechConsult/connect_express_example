const app = require('connect');
// Prints HTTP method and requests URL and calls next()
function logger(req, res, next) {
   console.log('%s %s', req.method, req.url);
   next();
}

// Ends response to HTTP request with "hello world"
function hello(req, res) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('hello world');
}
connect().use(logger).use(hello).listen(3000);