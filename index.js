const connect = require('connect');
const hello = require('./hello');
const setup = require('./setup');
const errorHandler = require('./errorHandler');


connect()
.use(router(require('./routes/user')))
.use(router(require('./routes/blog')))
.use(router(require('./routes/admin')))
.use(errorHandler)
// .use(setup(':method :url'))
// .use(hello)
// .use((req, res) =>{
//    foo();
//    res.setHeader('Content-Type','text/plain');
//    res.end('End of the game');
// })
.listen(3000);