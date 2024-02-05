var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    console.log(req.url);

    let domeen = "";
    let email = "";

    let [path, querystring] = req.url.split('?');

    let query = new URLSearchParams(querystring);

    let data = '';
    if (path == '/') {
        data = fs.readFileSync("./vaade1.html", "utf8");
    }

    if (path == '/vaade2.html') {
        data = fs.readFileSync("./vaade2.html", "utf8");
    }

    if (path == '/vaade3.html') {
        data = fs.readFileSync("./vaade3.html", "utf8");
    }

    if (path == '/vaade4.html') {
        data = fs.readFileSync("./vaade4.html", "utf8");
    }

    if (path == '/vaade5.html') {
        data = fs.readFileSync("./vaade5.html", "utf8");
    } 

    if (path == '/vaade7.html') {
        data = fs.readFileSync("./vaade7.html", "utf8");
    }

    /* 
     let [path, query] = req.url.split("?");
     let paramsArray = query.split("?")
     let paramsObject = {}
     for (let param of paramsArray) {
         let [key, value] = param.split("=")
         paramsObject[key] = value;
     }
    */

    res.write(data);
    res.end();
}).listen(8080);
