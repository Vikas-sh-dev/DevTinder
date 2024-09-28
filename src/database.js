const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Vikas:Vikas%40420@mongocluster.ck6ig.mongodb.net/?retryWrites=true&w=majority&appName=MongoCluster";

const client = new MongoClient(url);

const dbName = 'devTinder';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    const data = {
        "firstName": "Akashdeep",
        "lastName": "Gautam"
    }

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());


