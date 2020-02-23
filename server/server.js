const express = require('express');
const bodyParser = require('body-parser');
const { handleError, ErrorHandler } = require('./error/error');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// localhost:5000/
// app.get('/', (req, res) => res.send('Sorry, this is not the web page you are looking for.'));


// mount kakao_auth router on the app
const kakao_auth = require('./routers/kakao_auth');
app.use('/kakao_auth', kakao_auth);

app.all('*', (req, res) => {
    // 501: Not Implemented (구현되지 않음)

    // res.status(501).json({
    //     message: 'This Method is Not Implemented'
    // });

    // ex
    // throw new ErrorHandler(404, '');

});

// test code for err
// app.get('*', function (req, res, next) {
//     throw new Error('error has been occured');
// });

// test code for next
// app.get('*', function (req, res, next) {
//     console.log('test');
//     next('route');
// }, function (req, res, next) {
//     console.log('when it called next');

// });

// app.get('*', function (req, res, next) {
//     console.log("when it called next('route')");
// });

// a middleware function with no mount path. This code is executed for every request to the router
app.use(function (err, req, res, next) {
    console.log("handle error");
    handleError(err, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
