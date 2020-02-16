var express = require('express');
var router = express.Router();
var url = require('url');

// kakao_auth

// redirection path to get auth code
router.get('/get_auth_code', (req, res) => {

    var urlParsedObj = url.parse(req.url, true);

    console.log('kakao_get_auth_code', urlParsedObj.query);
    
    //console.log("host", host_info.getHost());

    res.redirect('http://localhost:3000/kakao_auth');

    // res.send({message: 'test'});
});

// router.get('/get_user_token', (req, res) => {

//     var urlParsedObj = url.parse(req.url, true);

//     console.log('kakao_get_auth_code', urlParsedObj.query);
    
//     res.redirect('http://localhost:3000/kakao_auth');
// });


module.exports = router;