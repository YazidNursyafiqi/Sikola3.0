import { MongoClient } from "mongodb";
const uri = 'mongodb://localhost:27017';
const data = {
    nama:'yanto',
    umur:'makassar'
}

async function start(){
    const client = new MongoClient(uri);

    try{
        const database = client.db("Sikola3");
        const account = database.collection('userAccount');
        await account.insertOne(data);
        console.log('berhasil');
    }
    catch{
        console.log('errorrrrr');
    }finally{
        console.log('selesai');
        await client.close();
    }
}

start();