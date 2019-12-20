const connect = require('connect');

// setup function can be called multiple times with different configuration
function setup(format) {

   // the logger component uses a regexp to match request properties
   const regexp = /:(\w+)/g;

   // Logger component that Connect will use
   return function createLogger(req, res, next) {
      const str = format.replace(regexp, (match, property) => {
         return req[property];
      });
      console.log(str);
      next();
   }  
}
module.exports = setup;


// Ends response to HTTP request with "hello world"
//function hello(req, res) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('hello world');
//}
//connect().use(logger(':method :url')).use(hello).listen(3000);