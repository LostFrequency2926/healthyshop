const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://healthyShop:Fh9K5Z7ArnaryeRX@cluster0.ieztwhj.mongodb.net/healthyShop';
const client = new MongoClient(url);

// Database Name
const dbName = 'healthyShop';

async function getProducts() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

async function getMovements() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movements');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

async function getUsers() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}


async function insertMovements() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movements');
    const insertResult = await collection.insertMany([]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

async function insertProducts() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');
    const insertResult = await collection.insertMany([]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

async function insertUsers() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');
    const insertResult = await collection.insertMany([    {
        name: "Daniel Muñoz",
        email: "dafemure.180@gmail.com",
        profile: "admin",
        dateCreated: "2022/11/20",
        }]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

async function editProducts(query, object) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');
    const updateResult = await collection.updateOne({ name: query }, { $set: object });
    console.log('Updated documents =>', updateResult);

    return 'done.';
}

async function getOnlyStockProducts() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products');
    const filteredDocs = await collection.find({ amount: {$gt:0} }).toArray();
    console.log('Found products with stock =>', filteredDocs);

    return 'done.';
}

getOnlyStockProducts()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
