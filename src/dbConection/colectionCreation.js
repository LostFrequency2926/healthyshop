var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://healthyShop:Fh9K5Z7ArnaryeRX@cluster0.ieztwhj.mongodb.net/healthyShop';

MongoClient.connect(url, function(err, db){

    if(err) throw err;

    var dbo = db.db("healthyShop");

    dbo.createCollection("products", function(err, res){
        if(err) throw err;
        console.log("Collection products created!");
    })

    dbo.createCollection("movements", function(err, res){
        if(err) throw err;
        console.log("Collection movements created!");
    })

    dbo.createCollection("users", function(err, res){
        if(err) throw err;
        console.log("Collection users created!");
    });
});

