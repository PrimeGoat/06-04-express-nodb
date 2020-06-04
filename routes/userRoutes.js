const express = require('express');
const router = express.Router();

router.get('/api/v1', (req, res) => {
    return res.status(200).json({ confirmation: 'success', users });
});

router.get('/api/v1/:id', (req, res) => {
    const user = users.filter(user => user.id === req.params.id);

    if(user.length == 0) {
    return res.status(404).json({confirmation: 'failed', message: "User not found"});
    }

    return res.status(200).json({confirmation: 'success', user});
    //res.send(req.params.id);
});


module.exports = router;