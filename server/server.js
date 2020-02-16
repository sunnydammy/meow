const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const port       = process.env.PORT || 5000;

const mysql      = require('mysql');
const db_config  = require('./config/database');

const db_con     = mysql.createConnection(db_config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// localhost:5000/
// app.get('/', (req, res) => res.send('Sorry, this is not the web page you are looking for.'));


// kakao_auth
const kakao_auth = require('./routers/kakao_auth');
app.use('/kakao_auth', kakao_auth);

app.get('/', function(req, res){

    db_con.query('select * from user', function(err, rows) {
      if(err) throw err;
  
      console.log('The solution is: ', rows);
      res.send(rows);

    });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
