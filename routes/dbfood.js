var express = require('express');
var router = express.Router();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'food'
});

router.get('/',(req,res)=>{
    // const sql = 'SELECT name, proteins, fats, carbs FROM fruitsandberries;';
    // db.query(sql, (error, dane)=>{
    //     res.render('frsearch', {dane: dane});
    // });
    res.render('frsearch');
});

router.post('/', (req,res)=>{
    const foodName = req.body.name;
    const sql = `SELECT name, proteins, fats, carbs, calories FROM fruitsandberries WHERE name LIKE "%${foodName}%" ;`;
    db.query(sql, (error,dane)=>{
        if(error){
            console.log(error);
        }
        res.render('frsearchcomplete', {dane:dane});
    })
})

db.connect();
module.exports = router;