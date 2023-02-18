const PORT = 8007;

const cors = require('cors');
const express = require('express');
const { MongoClient } = require('mongodb');
const { v1: uuidv1 } = require('uuid');
const uri = 'mongodb+srv://nic:8519@cluster0.mgho20b.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    const userid = uuidv1();

    try{
        await client.connect();
        const database = client.db('BAAND');
        const users = database.collection('users');

        // check if user exists
        const exisitingUser = await users.findOne({email});
        if(exisitingUser) return res.status(409).json({message: 'User already exists'});

        const lowerEmail = email.toLowerCase();

        // Data to send to database
        data = { 
            userid: userid,
            email: lowerEmail,
            password: password,
            bazinga: 'bazinga',
        }

        const newUser = await users.insertOne(data);
        return res.status(201).json({message: 'User created'});
        
    } catch {
        res.status(500).json({message: 'Something went wrong'});
    }


    

});

app.get('/users', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('BAAND');
        const users = await database.collection('users').find().toArray();

        res.json(users);
    } finally {
        await client.close();
    }
    
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

