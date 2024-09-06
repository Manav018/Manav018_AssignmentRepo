// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NonceExample {
    uint256 public nonce = 0; // Initialize nonce to 0

    // Event to log transaction details
    event Transaction(address indexed from, address indexed to, uint256 amount, uint256 nonce);

    function sendTransaction(address _from, address _to, uint256 _amount) public {
        // Increment nonce for each transaction
        nonce++;

        // Emit event to log the transaction details
        emit Transaction(_from, _to, _amount, nonce);
    }

    function getNonce() public view returns (uint256) {
        return nonce;
    }
}
