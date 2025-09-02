// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ZeroGToken.sol";

contract MicroPayment {
    ZeroGToken public token;

    struct Payment {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    Payment[] public payments;

    event PaymentSent(address indexed sender, address indexed receiver, uint256 amount, uint256 timestamp);

    constructor(address tokenAddress) {
        token = ZeroGToken(tokenAddress);
    }

    function sendPayment(address receiver, uint256 amount) public {
        require(token.balanceOf(msg.sender) >= amount, "Insufficient balance");
        require(token.transfer(receiver, amount), "Transfer failed");
        payments.push(Payment(msg.sender, receiver, amount, block.timestamp));
        emit PaymentSent(msg.sender, receiver, amount, block.timestamp);
    }

    function getPayments() public view returns (Payment[] memory) {
        return payments;
    }
}
