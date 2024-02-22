import {MongoClient, ObjectId, ServerApiVersion} from 'mongodb'

const uri = 'mongodb+srv://snadering:6p3W5Lc3PeLtrpsz@cluster0.qnlxhan.mongodb.net/'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})



async function run(){
    try{


        await client.connect
        const db = client.db('sample_weatherdata').collection('data')
        //console.log(db)
        await db.findOne({_id: new ObjectId('65d4722282e52579ae10b733')}).then((data) => {
            console.log(data)
        })
        //db.find({}).limit(3).toArray().then((data) => {console.log(data)})
        db.find({ elevation: {$eq: 9999 }}).limit(3).toArray().then((data) => {console.log(data)})
        //db.updateOne({_id: new ObjectId('65d4722282e52579ae10b733')}, {$set: {hello: 'world2'}}).then((data) => {console.log(data)})


    } catch (e) {
        console.log(e)
    }
}

run().catch((e) => {
    console.log(e)
})