const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'valk',
    database: 'domeen'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade1.html'));
});

app.get('/vaade2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade2.html')); 
});

app.get('/vaade3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade3.html')); 
});

app.get('/vaade4.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade4.html')); 
});

app.get('/vaade5.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade5.html')); 
});

app.get('/vaade7.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'vaade7.html')); 
});

app.post('/vaade7.html', (req, res) => {
    console.log('Received POST request with body:', req.body);

    const { domeen, ending, Name, email, password, username, countryCodeSelect, phoneNumberInput } = req.body;

    const query = 'INSERT INTO domeenid (domeen, ending, name, email, password, username, countryCodeSelect, phoneNumberInput) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [domeen, ending, Name, email, password, username, countryCodeSelect, phoneNumberInput], (err, result) => {
        if (err) {
            console.error('Error saving domain information:', err);
            res.status(500).send('Error saving domain information.');
        }
    });
});

    /* 
     let [path, query] = req.url.split("?");
     let paramsArray = query.split("?")
     let paramsObject = {}
     for (let param of paramsArray) {
         let [key, value] = param.split("=")
         paramsObject[key] = value;
     }
    */

  app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
});
