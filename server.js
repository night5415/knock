const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

http.createServer(function (req, res) {
    let fileName = url.parse(req.url).pathname, 
        contentType = 'text/html', 
        filePath = `.${req.url}`,
        extname = path.extname(filePath);

    if (filePath == './')
        filePath = './index.html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    fileName = (fileName === "/") ? 'index.html' : fileName.replace('/', '');
    let fl = fs.readFileSync(fileName);
    res.end(fl);
}).listen(9615);