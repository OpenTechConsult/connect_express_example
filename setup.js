// setup function that can be called multiple times with different configuration
function setup(format) {

    // the logger component uses a regexp to match request properties
    const regexp = /:(\w+)/g;

    // logger component that Connect will use
    return function createLogger(req, res, next) {
        const str = format.replace(regexp, (match, property) => {
            return req[property];
        });
        console.log(str);
        next();
    }
}
module.exports = setup;