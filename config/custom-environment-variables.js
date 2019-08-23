module.exports = {
    "Host":
    {
        "domain": "HOST_NAME",
        "port": "HOST_REPORTQUERYFILTERS_PORT",
        "version": "HOST_VERSION",
        "hostpath":"HOST_PATH",
        "logfilepath": "LOG4JS_CONFIG"
    },
    "Security":
    {

        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD",
        "mode":"SYS_REDIS_MODE",
        "sentinels":{
            "hosts": "SYS_REDIS_SENTINEL_HOSTS",
            "port":"SYS_REDIS_SENTINEL_PORT",
            "name":"SYS_REDIS_SENTINEL_NAME"
        }

    },
    "Services" : {
        "accessToken":"SYS_ACCESSTOKEN",
        "ardsliteServiceHost": "SYS_ARDSLITE_SERVICE_HOST",
        "ardsliteServicePort":  "SYS_ARDSLITE_SERVICE_PORT",
        "ardsliteServiceVersion":  "SYS_ARDSLITE_SERVICE_VERSION",
        "userServiceHost":  "SYS_USER_SERVICE_HOST",
        "userServicePort":  "SYS_USER_SERVICE_HOST",
        "userServiceVersion":  "SYS_USER_SERVICE_HOST"
    }
};

