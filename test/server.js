const http = require('http');

http.createServer(function(req, res){
    if (req.url === "/OK") {
        console.log("Inbound 'OK' being processed");
        res.writeHead(200)
        res.end();
    } else {
        console.log("Error code 404")
        res.writeHead(404)
        res.end()
    }
    res.end();
}).listen(3000, function(){
    console.log("listening on port 3000...")
})