const express = require('express');
const app = express();

const port = 2525

app.get('/', (req, res) => {
    res.send('Hello World!');
     res.json('Hello gurleeesss!');
});

app.get('/gurlsss', (req, res) => {
     res.json('Hello gurleeesss!');
});

app.listen(port || 8000, () => {
    console.log(`Ayesha is running her first backend project ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.