const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname)))
//app.use(express.static('.'));

app.get('/api', (req, res) => 
{
    res.send('You\' gone too far');
});

app.get('/', (req, res) =>
{
    res.sendFile(__dirname + '/index.html');
});

app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.listen(PORT, '0.0.0.0', () => 
{
    console.log(`Server running at ${PORT}`);
});