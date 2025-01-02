const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.use('/users', userRoutes);

module.exports = app;


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
// const app = express();

// // Import the connectToDb function to establish a DB connection
// const connectToDb = require('./db/db');
// const userRoutes = require('./routes/user.routes');

// // Call the function to connect to MongoDB
// connectToDb();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.use('/users', userRoutes);

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

// module.exports = app;
