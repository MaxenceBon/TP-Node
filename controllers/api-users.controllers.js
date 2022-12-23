exports.getUsers = (req,res) => {
    const data = require('../database/data.json')
    res.json({users:data.users});
}