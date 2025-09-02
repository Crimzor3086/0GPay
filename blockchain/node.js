// 0G Pay Lightweight Blockchain Node (Outline)
const express = require('express');
const bodyParser = require('body-parser');
const { Ledger } = require('./ledger');
const { Consensus } = require('./consensus');

const app = express();
app.use(bodyParser.json());

// Transaction pool
let transactionPool = [];

// Node's ledger and consensus engine
const ledger = new Ledger();
const consensus = new Consensus(ledger);

// API endpoints (outline)
app.post('/transaction', (req, res) => {
    // Validate and add transaction to pool
    // ...
    res.send({ status: 'Transaction received' });
});

app.get('/ledger', (req, res) => {
    res.send(ledger.getBlocks());
});

app.get('/status', (req, res) => {
    res.send({ status: 'Node running', height: ledger.getHeight() });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`0G Pay Node running on port ${PORT}`);
});
