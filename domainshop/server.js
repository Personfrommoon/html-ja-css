var http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);

    let domeen = "";
    let email = "";

    let queryParams = new URLSearchParams(req.url.split("?")[1]);
   
   /* 
    let [path, query] = req.url.split("?");
    let paramsArray = query.split("?")
    let paramsObject = {}
    for (let param of paramsArray) {
        let [key, value] = param.split("=")
        paramsObject[key] = value;
    }
 */

    res.write("Valitud domeen:" + " " + queryParams.get("domeen") + queryParams.get("ending"));
    res.end();
}).listen(8080);