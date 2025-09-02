// 0G Pay Smart Contract Integration

export const ZERO_G_TOKEN_ADDRESS = "0xd332ABE4395c5173E04F4cbBF39DB175C23ad0eC";

// Replace with actual ABI JSON for ZeroGToken
export const ZERO_G_TOKEN_ABI = [
  // Example minimal ABI for ERC-20
  {
    "constant":true,
    "inputs":[{"name":"","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"","type":"uint256"}],
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],
    "name":"transfer",
    "outputs":[{"name":"","type":"bool"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"name",
    "outputs":[{"name":"","type":"string"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"symbol",
    "outputs":[{"name":"","type":"string"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"totalSupply",
    "outputs":[{"name":"","type":"uint256"}],
    "type":"function"
  }
];

// Add MicroPayment contract address and ABI when available
export const MICRO_PAYMENT_ADDRESS = "";
export const MICRO_PAYMENT_ABI = [];
