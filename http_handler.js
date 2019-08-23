/**
 * Created by Sukitha on 1/13/2017.
 */

var util = require('util');
var request = require("request");
var logger = require('dvp-common/LogHandler/CommonLogHandler.js').logger;
var config = require('config');

module.exports.http_post = function (serviceUrl,postData,tenant,company) {

    var jsonStr = JSON.stringify(postData);
    var accessToken = util.format("bearer %s", config.Services.accessToken);
    console.log('HTTP POST Request:: %s', serviceUrl);
    var options = {
        url: serviceUrl,
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': accessToken,
            'companyinfo': util.format("%d:%d", tenant,company)
        },
        body: jsonStr
    };

    return new Promise(function (fulfill, reject) {
        request.post(options, function optionalCallback(err, httpResponse, body) {
            if (err) {
                console.log('upload failed:', err);
                reject(null);
            }
            else if(httpResponse.statusCode === 200){
                fulfill(body)
            }
            else {
                reject(null);
            }
        });
    });

};

module.exports.http_delete = function (serviceUrl,postData,tenant,company) {

    var jsonStr = JSON.stringify(postData);
    var accessToken = util.format("bearer %s", config.Services.accessToken);
    console.log('HTTP POST Request:: %s', serviceUrl);
    var options = {
        url: serviceUrl,
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'authorization': accessToken,
            'companyinfo': util.format("%d:%d", tenant,company)
        }
    };

    return new Promise(function (fulfill, reject) {
        request.del(options, function optionalCallback(err, httpResponse, body) {
            if (err) {
                console.log('upload failed:', err);
                reject(null);
            }
            else if(httpResponse.statusCode === 200){
                fulfill(body)
            }
            else {
                reject(null);
            }
        });
    });

};

