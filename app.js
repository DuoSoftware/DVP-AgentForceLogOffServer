
var restify = require('restify');
var config = require('config');
var port = config.Host.port || 3000;

var logger = require('dvp-common/LogHandler/CommonLogHandler.js').logger;
var messageFormatter = require('dvp-common/CommonMessageGenerator/ClientMessageJsonFormatter.js');
var login_handler = require('./login_handler');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer({
    name: "DVP-AgentForceLogoff",
    version: '1.0.0'
}, function (req, res) {
    console.log('CreateServer - Done');
});
/*server.get('/hello/:name', respond);
server.head('/hello/:name', respond);*/
server.post('resource/:tenant/:resourceId/:company/:jti',login_handler.logout);

server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});