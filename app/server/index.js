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
            registered: 1,
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

// check if email and password match on user with email
app.post('/login', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;
    const database = client.db('BAAND');
    const users = database.collection('users');
    try{
        await client.connect();
        
        const exisitingUser = await users.findOne({email});
        if(!exisitingUser) return res.status(404).json({message: 'User not found'});

        if(exisitingUser.password !== password) {
            return res.status(401).json({message: 'User not found'});}

        if(exisitingUser.password === password) {
            return res.status(201).json({message: 'User logged in'});
        }



    } catch {
        res.status(500).json({message: 'Something went wrong'});
    }
    
});



// given email, return registration status
app.post('/regstatus', async (req, res) => {
    const client = new MongoClient(uri);
    const { email } = req.body;
    const database = client.db('BAAND');
    const users = database.collection('users');
    try{
        await client.connect();
        const user = await users.findOne({email});
        // user not registered
        if(user.registered == 0){
            return res.status(201).json({message: 'User not registered'});
        }
        // user registered but not onboarded
        if(user.registered == 1){
            return res.status(202).json({message: 'User registered but not onboarded'});
        }
        // user onboarded
        if(user.registered == 2){
            return res.status(203).json({message: 'User onboarded'});
                    
        }

    } catch {
        res.status(500).json({message: 'Something went wrong'});
    }
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

