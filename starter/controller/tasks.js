const getAllTasks = (req, res) => {
  res.send('get tasks');
}

const createTask = (req, res) => {
  res.json(req.body);
}

const getTask = (req, res) => {
  res.send('get single task');
}
// 8ZomOfvJxAkL7m8S
const updateTask = (req, res) => {
  res.send('update task');
}

const deleteTask = (req, res) => {
  res.send('delete task');
}

module.exports = {
    getAllTasks,  getTask, createTask, updateTask, deleteTask
}