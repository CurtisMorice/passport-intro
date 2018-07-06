const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// This route *should* return the logged in users pets
router.get('/', (req, res) => {
    console.log('/pet GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);

    if (request.isAuthenticated()){

    let queryText = `SELECT * FROM "pet"`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}else { res.sendStatus(403);}
});

// This route *should* add a pet for the logged in user
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
    console.log('/pet POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    res.sendStatus(200);
} else {
    res.sendStatus(403);
}
    
});

module.exports = router;