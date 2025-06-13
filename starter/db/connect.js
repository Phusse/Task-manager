const mongoose = require('mongoose');

const connectionString = 
'mongodb+srv://dubemmegbo:8ZomOfvJxAkL7m8S@node-js-journey.vnx6z6n.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Node-JS-Journey'


mongoose
.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => console.log('Connected to the database successfully'))
.catch((err) => console.log(err));