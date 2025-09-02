# 0G Pay

A minimalist, futuristic micro-payments blockchain platform for instant, low-fee transactions.

## Project Structure

```
0GPay/
├── contracts/           # Solidity smart contracts
│   ├── ZeroGToken.sol   # ERC-20-like 0G Token
│   ├── MicroPayment.sol # Payment contract for sending/receiving tokens
│   └── TransactionLog.sol # (Optional) Analytics contract
├── blockchain/          # Lightweight blockchain node implementation
│   ├── node.js          # Node server (Express API)
│   ├── ledger.js        # Ledger/block storage
│   └── consensus.js     # Consensus engine (PoS/PoA outline)
├── frontend/            # React app (UI/UX)
│   └── ...
├── scripts/             # Deployment, node management, etc.
├── README.md
└── package.json
```

## Smart Contracts

- **ZeroGToken.sol**: ERC-20-like token contract for 0G Token.
- **MicroPayment.sol**: Handles sending/receiving tokens, logs transactions.
- **TransactionLog.sol**: (Optional) Stores transaction summaries for analytics.

## Blockchain Node

- **node.js**: Express server exposing endpoints for transaction submission, ledger access, and status.
- **ledger.js**: Manages blocks and transaction storage.
- **consensus.js**: Placeholder for fast PoS/PoA consensus logic.

## Frontend

- Minimalist, futuristic React app (light/dark mode)
- Dashboard, Send/Receive, History, Settings screens
- Micro-interactions and instant feedback

## Getting Started

1. **Install dependencies**
   - For contracts: Use Hardhat/Truffle (not included yet)
   - For blockchain node: `cd blockchain && npm install express body-parser`
   - For frontend: `cd frontend && npm install`

2. **Run the blockchain node**
   ```bash
   cd blockchain
   node node.js
   ```

3. **Run the frontend**
   ```bash
   cd frontend
   npm start
   ```

4. **Deploy contracts**
   - Use your preferred Solidity toolchain (e.g., Hardhat)

## License
MIT
