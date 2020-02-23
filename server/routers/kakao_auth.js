const express = require('express');
const router = express.Router();
const url = require('url');
const db = require('../database/db');
const db_user = require('../database/db_user');

// kakao_auth

// redirection path to get auth code
router.get('/get_auth_code', (req, res) => {

    const urlParsedObj = url.parse(req.url, true);

    console.log('kakao_get_auth_code', urlParsedObj.query);

    //console.log("host", host_info.getHost());

    res.redirect('http://localhost:3000/kakao_auth');

    // res.send({message: 'test'});
});

router.get('/test', (req, res) => {
    db.connect((err, con) => {
        // 1. connect select user ok
        let query = "select id, nick_name from user";
        con.query(query, (err, rows, fields) => {

            console.log("rows = ", rows);

            return res.json({ data: rows }); // 결과는 rows에 담아 전송
        });

        // 2. connect insert user ok
        // let insertq = "insert into user (nick_name, email_addr, pwd) values (?, ?, ?)";
        // let resultInsert = con.query(insertq, ['test5', 'test5@gmail.com', '1234'], (err, rows, fields) => {

        //     console.log("rows = ", rows);

        //     console.log("rows.affectedRows", rows.affectedRows);
        //     console.log("rows.changedRows", rows.changedRows);

        //     return res.json({ data: rows }); // 결과는 rows에 담아 전송
        // });
    });
});

router.get('/get_user_token', (req, res) => {

    db((err, con) => {
        let query = "select id, nick_name from user";
        con.query(query, (err, rows, fields) => {
            // con.release(); // 연결세션 반환

            if (err) {
                console.log("test...................error has occured.");
                // throw err;
            }


            console.log("rows = ", rows);

            return res.json({ data: rows }); // 결과는 rows에 담아 전송
        });

    });

});


module.exports = router;