
let express = require("express");

let app = express();

app.use(logger);
app.use(checkPermission);

app.get("/books",function(req,res){
    res.send({route: "/books"});
});

app.get("/libraries",function(req,res){
    res.send({route: "/libraries", permission: req.perMission});
});

app.get("/authors",function(req,res){
    res.send({ route: "/authors", permission: req.perMission});
});

function logger(req,res,next){
    console.log("logger");
    next();
}
function checkPermission(req,res,next){
    if(req.path == "/libraries" || req.path == "/authors"){
        req.perMission = true;
    }
    next();
}

app.listen(5000,function(){
    console.log("Unit-4");
});