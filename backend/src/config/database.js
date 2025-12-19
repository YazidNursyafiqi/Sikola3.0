import {MongoClient} from 'mongodb';

const uri = 'mongodb://localhost:27017/sikola3';

async function getDatabaseAccount(callback){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const database = client.db('sikola3');
        const accounts = database.collection('accounts');
        await callback(accounts);
    }catch(err){
        console.log(err);
    }finally{
        console.log('database closed');
        await client.close();
    }
}

export default getDatabaseAccount;