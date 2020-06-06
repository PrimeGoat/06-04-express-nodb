const express = require('express');
const users = require('../models/users');
const router = express.Router();

router.get('/', (req, res) => {
    if(users.length == 0) {
        return res.status(404).json({confirmation: 'failed', message: "No users found"});
    }
    return res.status(200).json({ confirmation: 'success', users });
});

router.get('/:id', (req, res) => {
    const user = users.filter(user => user.id === req.params.id);

    if(user.length == 0) {
    return res.status(404).json({confirmation: 'failed', message: "User not found"});
    }

    return res.status(200).json({confirmation: 'success', user});
    //res.send(req.params.id);
});

/*
// create user
router.post('/', (req, res) => {
    return res.json(req.body);
});
*/

// create user
router.post('/', (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ confirmation: "failed", message: "You must specify username, email, password"})
    }

    const user = users.filter(user => user.email === req.body.email);

    if(user.length > 0) {
        return res.status(400).json({ confirmation: 'fail', message: "user already exists" });
    }

    let newUser = {};

    newUser.id = Date.now();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    users.push(newUser);

    return res.status(201).json({ message: 'User created', users })
});

// Update user
router.put('/:id', (req, res) => {
    const user = users.filter(user => user.email === req.body.email);
    let updatedUser = req.body;

    if(user.length > 0) {
        user.name = updatedUser.name ? updatedUser.name : user.name;
        user.email = updatedUser.email ? updatedUser.email : user.email;
    }
});

// Delete user
router.delete('/:id', (req, res) => {
    const user = users.filter(user => user.id !== req.params.id);

    return res.status(200).json({ message: 'User deleted', user });
});

/*
hEADERS:
Content-Type: application/json


POST mode body:
{
"name":"hans",
"email":"eh@eh.com",
"password":"woo"
}






*/


module.exports = router;