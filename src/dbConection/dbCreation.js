var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://healthyShop:Fh9K5Z7ArnaryeRX@cluster0.ieztwhj.mongodb.net/healthyShop';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log('Database created!')
    db.close();
});

