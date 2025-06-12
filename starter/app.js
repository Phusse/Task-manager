const express = require('express')
const app = express();
const tasks = require('./routes/task')

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/hello', (req, res) => {
  res.send('Task manager App'); 
});

app.use('/api/v1/tasks', tasks);
const port = 3000

app.listen(port, console.log(`Server is running on port ${port}...`));