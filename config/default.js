module.exports = {
    "Security":
        {
            "ip": "138.197.90.92",
            "port": 6389,
            "user": "duo",
            "password": "DuoS123",
            "mode": "instance",//instance, cluster, sentinel
            "sentinels": {
                "hosts": "138.197.90.92,45.55.205.92,138.197.90.92",
                "port": 16389,
                "name": "redis-cluster"
            }

        },
    "Host": {
        "domain": "0.0.0.0",
        "port": 8846,
        "version": "1.0.0.0",
        "hostpath": "./config",
        "logfilepath": ""
    },
    "Services" : {
        "accessToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdWtpdGhhIiwianRpIjoiYWEzOGRmZWYtNDFhOC00MWUyLTgwMzktOTJjZTY0YjM4ZDFmIiwic3ViIjoiNTZhOWU3NTlmYjA3MTkwN2EwMDAwMDAxMjVkOWU4MGI1YzdjNGY5ODQ2NmY5MjExNzk2ZWJmNDMiLCJleHAiOjE5MDIzODExMTgsInRlbmFudCI6LTEsImNvbXBhbnkiOi0xLCJzY29wZSI6W3sicmVzb3VyY2UiOiJhbGwiLCJhY3Rpb25zIjoiYWxsIn1dLCJpYXQiOjE0NzAzODExMTh9.Gmlu00Uj66Fzts-w6qEwNUz46XYGzE8wHUhAJOFtiRo",
        "ardsliteServiceHost": "ardsliteservice.app1.veery.cloud",
        "ardsliteServicePort": "2223",
        "ardsliteServiceVersion": "1.0.0.0",
        "userServiceHost": "userservice.app1.veery.cloud",
        "userServicePort": "3638",
        "userServiceVersion": "1.0.0.0"
    }
};
