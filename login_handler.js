var logger = require('dvp-common/LogHandler/CommonLogHandler.js').logger;
var messageFormatter = require('dvp-common/CommonMessageGenerator/ClientMessageJsonFormatter.js');
var http_handler = require('./http_handler');
var validator = require('validator');

var config = require('config');
var util = require('util');

module.exports.logout = function(req,res){

    try {

        logger.info('Agent Logout  - Request received -  Data - %s - %s',JSON.stringify(req.params), JSON.stringify(req.body));

        function user_logout() {
            var serverUrlu = util.format("http://%s/oauth/token/revoke/%s", config.Services.userServiceHost,req.params.jti);
            if (validator.isIP(config.Services.userServiceHost)) {
                serverUrlu = util.format("http://%s:%s/oauth/token/revoke/%s", config.Services.userServiceHost, config.Services.userServicePort,req.params.jti);
            }
            http_handler.http_delete(serverUrlu, null, req.params.tenant, req.params.company).then(function (response) {
                jsonString = messageFormatter.FormatMessage(undefined, "EXCEPTION", true, response);
                logger.info('user_logout - http_post : %s ', jsonString);
                res.end(jsonString);
            },function (error) {
                jsonString = messageFormatter.FormatMessage(error, "EXCEPTION", false, undefined);
                logger.error('user_logout - http_post Exception occurred : %s ', jsonString);
                res.end(jsonString);
            });

        }


        var serverUrl = util.format("http://%s/DVP/API/%s/ARDS/resource/%s", config.Services.ardsliteServiceHost, config.Services.ardsliteServiceVersion,req.params.resourceId);
        if (validator.isIP(config.Services.ardsliteServiceHost)) {
            serverUrl = util.format("http://%s:%s/DVP/API/%s/ARDS/resource/%s", config.Services.ardsliteServiceHost, config.Services.ardsliteServicePort, config.Services.ardsliteServiceVersion,req.params.resourceId);
        }

        http_handler.http_delete(serverUrl, null, req.params.tenant, req.params.company).then(function (response) {

            jsonString = messageFormatter.FormatMessage(undefined, "EXCEPTION", true, response);
            logger.info('logout from ards - http_post : %s ', jsonString);
            user_logout();
        },function (error) {
            jsonString = messageFormatter.FormatMessage(error, "EXCEPTION", false, undefined);
            logger.error('logout from ards Exception occurred : %s ', jsonString);
            user_logout();
        });

    }
    catch (ex) {

        logger.error('Agent Logout  - Exception occurred -  Data - %s - %s',JSON.stringify(req.params), JSON.stringify(req.body), ex);
        var jsonString = messageFormatter.FormatMessage(ex, "EXCEPTION", false, undefined);
        logger.debug('Agent Logout  - Request response : %s ', jsonString);
        res.end(jsonString);
    }
    return next();


   /*
    try {
        login_handler.logout(req,res)
    }catch (ex) {
        logger.error('Agent Logout  - Exception occurred -  Data - %s - %s',JSON.stringify(req.params), JSON.stringify(req.body), ex);
        var jsonString = messageFormatter.FormatMessage(ex, "EXCEPTION", false, undefined);
        logger.debug('AddReportFilter - Request response : %s ', jsonString);
        res.end(jsonString);
    }*/
};