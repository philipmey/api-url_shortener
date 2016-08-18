var express = require('express');
var app = express();

app.get('/api/whoami', function (req, res) {
    var softwareString = req.headers['user-agent'].split('(')[1].split(')')[0];
    var languageString = req.headers['accept-language'].split(',')[0];
    
    
    res.send({"ipaddress": req.headers['x-forwarded-for'], "language": languageString, "software": softwareString});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});