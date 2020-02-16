const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// kakao_auth
var kakao_auth = require('./routers/kakao_auth');
app.use('/kakao_auth', kakao_auth);

app.listen(port, () => console.log(`Listening on port ${port}`));