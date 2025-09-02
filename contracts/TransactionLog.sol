// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionLog {
    struct LogEntry {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    LogEntry[] public logs;

    event LogAdded(address indexed sender, address indexed receiver, uint256 amount, uint256 timestamp);

    function addLog(address sender, address receiver, uint256 amount) public {
        logs.push(LogEntry(sender, receiver, amount, block.timestamp));
        emit LogAdded(sender, receiver, amount, block.timestamp);
    }

    function getLogs() public view returns (LogEntry[] memory) {
        return logs;
    }
}
