const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Serve Master Views
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'fishin-admin.html')));
app.get('/warehouse', (req, res) => res.sendFile(path.join(__dirname, '3pl-gate.html')));
app.get('/portal', (req, res) => res.sendFile(path.join(__dirname, 'carrier-portal.html')));

app.listen(PORT, () => console.log(`The Fishin' Company Network active on port ${PORT}`));