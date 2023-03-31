const PORT = 8007;

const cors = require('cors');
const express = require('express');
const { MongoClient } = require('mongodb');
const { v1: uuidv1 } = require('uuid');
const uri =
	'mongodb+srv://nic:8519@cluster0.mgho20b.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
	const client = new MongoClient(uri);
	const { email, password } = req.body;

	const userid = uuidv1();

	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');

		// check if user exists
		const exisitingUser = await users.findOne({ email });
		if (exisitingUser)
			return res.status(409).json({ message: 'User already exists' });

		const lowerEmail = email.toLowerCase();

		// Data to send to database
		data = {
			userid: userid,
			email: lowerEmail,
			password: password,
			registered: 1,
		};

		const newUser = await users.insertOne(data);
		return res.status(201).json({ message: 'User created' });
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
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
	try {
		await client.connect();

		const exisitingUser = await users.findOne({ email });
		if (!exisitingUser)
			return res.status(404).json({ message: 'User not found' });

		if (exisitingUser.password !== password) {
			return res.status(401).json({ message: 'User not found' });
		}

		if (exisitingUser.password === password) {
			return res.status(201).json({ message: 'User logged in' });
		}
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// given email, return registration status
app.post('/regstatus', async (req, res) => {
	const client = new MongoClient(uri);
	const { email } = req.body;
	const database = client.db('BAAND');
	const users = database.collection('users');
	try {
		await client.connect();
		const user = await users.findOne({ email });
		// user not registered
		if (user.registered == 0) {
			return res.status(201).json({ message: 'User not registered' });
		}
		// user registered but not onboarded
		if (user.registered == 1) {
			return res
				.status(202)
				.json({ message: 'User registered but not onboarded' });
		}
		// user onboarded
		if (user.registered == 2) {
			return res.status(203).json({ message: 'User onboarded' });
		}
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// given userid, return registration status
app.post('/regstatusID', async (req, res) => {
	const client = new MongoClient(uri);
	const { userid } = req.body;
	const database = client.db('BAAND');
	const users = database.collection('users');
	try {
		await client.connect();
		const user = await users.findOne({ userid });
		// user not registered
		if (user.registered == 0) {
			return res.status(201).json({ message: 'User not registered' });
		}
		// user registered but not onboarded
		if (user.registered == 1) {
			return res
				.status(202)
				.json({ message: 'User registered but not onboarded' });
		}
		// user onboarded
		if (user.registered == 2) {
			return res.status(203).json({ message: 'User onboarded' });
		}
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

app.post('/getuserid', async (req, res) => {
	const client = new MongoClient(uri);
	try {
		const { email } = req.body;
		const database = client.db('BAAND');

		const query = { email: email };
		const options = {
			sort: { _id: -1 },
			projection: { _id: 0, userid: 1 },
		};
		const id = await database.collection('users').findOne(query, options);
		console.log(id);
		return res.status(201).json({ id: id });
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// updateOne user given userid
app.post('/onboard', async (req, res) => {
	const client = new MongoClient(uri);
	try {
		const {
			userid,
			age,
			name,
			instruments,
			seeking,
			image1,
			image2,
			image3,
			image4,
			image5,
			image6,
			bio,
		} = req.body;
		const database = client.db('BAAND');
		const users = database.collection('users');
		console.log(req.body);

		users.updateOne(
			{ userid: userid },
			{
				$set: {
					registered: 2,
					name: name,
					age: age,
					instruments: instruments,
					seeking: seeking,
					image1: image1,
					image2: image2,
					image3: image3,
					image4: image4,
					image5: image5,
					image6: image6,
					bio: bio,
				},
			}
		);

		return res.status(201).json({ message: 'User onboarded' });
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// Get individual user
app.get('/user', async (req, res) => {
	console.log('getting user');
	const client = new MongoClient(uri);
	const userId = req.query.userId;

	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');

		const query = { userid: userId };
		const user = await users.findOne(query);
		res.send(user);
	} finally {
		await client.close();
	}
});

// reset database
app.delete('/reset', async (req, res) => {
	console.log('resetting database');
	const client = new MongoClient(uri);
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');

		users.deleteMany({ registered: 1 });

		return res.status(201).json({ message: 'Database reset' });
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// get all users from database
app.get('/allusers', async (req, res) => {
	console.log('getting all users');
	const client = new MongoClient(uri);
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = await database.collection('users').find().toArray();
		res.send(users);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// get all filtered users from database given userid

// get users filters (seeking)

app.get('/allfiltered', async (req, res) => {
	console.log('getting all filtered users');
	const client = new MongoClient(uri);
	const userId = req.query.userId;

	try {
		// get user filters (seeking)
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');
		const query = { userid: userId };
		const user = await users.findOne(query);
		console.log(user.userid);
		res.send(user);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// get seeking array from user given userid
app.get('/seeking', async (req, res) => {
	console.log('getting seeking array');
	const client = new MongoClient(uri);
	const userID = req.query.userID;
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');
		const query = { userid: userID };
		const user = await users.findOne(query);
		console.log(user.seeking);
		res.send(user.seeking);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// given userid, get registered status
app.get('/registered', async (req, res) => {
	console.log('getting registered status');
	const client = new MongoClient(uri);
	const userID = req.query.userID;
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');
		const query = { userid: userID };
		const user = await users.findOne(query);
		console.log(user.registered);
		res.send(user.registered);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// update given info on user given userid
app.post('/update', async (req, res) => {
	const client = new MongoClient(uri);
	try {
		const {
			userid,
			age,
			name,
			instruments,
			seeking,
			image1,
			image2,
			image3,
			image4,
			image5,
			image6,
			bio,
		} = req.body;
		const database = client.db('BAAND');
		const users = database.collection('users');
		console.log(req.body);

		users.updateOne(
			{ userid: userid },
			{
				$set: {
					age: age,
					name: name,
					instruments: instruments,
					seeking: seeking,
					image1: image1,
					image2: image2,
					image3: image3,
					image4: image4,
					image5: image5,
					image6: image6,
					bio: bio,
				},
			}
		);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

// add userid to liked array given userid
app.post('/addliked', async (req, res) => {
	const client = new MongoClient(uri);
	const { userid, likedid } = req.body;
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');

		const query = { userid: userid };
		const currentuser = await users.findOne(query);

		// check if likedid is already in liked array
		for (var i = 0; i <= currentuser.liked.length; i++) {
			console.log("in for loop")
			if (currentuser.liked[i] == likedid) {
				console.log("already liked");
				return res.status(201).json({ message: 'Already liked' });
			} else {
				console.log("not liked yet");
				// push likedid to liked array
				const updateDocument = {
					$push: { liked: likedid },
				};

				const user = await users.updateOne(query, updateDocument);
				res.send(user);
			}
		}
	} finally {
		await client.close();
	}
});

// get liked array given userid
app.get('/getliked', async (req, res) => {
	console.log('getting liked array');
	const client = new MongoClient(uri);
	const userID = req.query.userID;
	try {
		await client.connect();
		const database = client.db('BAAND');
		const users = database.collection('users');
		const query = { userid: userID };
		const user = await users.findOne(query);
		console.log(user.liked);
		res.send(user.liked);
	} catch {
		res.status(500).json({ message: 'Something went wrong' });
	} finally {
		await client.close();
	}
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
