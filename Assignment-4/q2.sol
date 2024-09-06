// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashChecker {
    // This function checks if the SHA-256 hash of the input (starting with 'devadnani26') starts with '00000'
    function checkHash(string memory suffix) public pure returns (bool) {
        // Concatenate 'devadnani26' with the provided suffix
        string memory input = string(abi.encodePacked("devadnani26", suffix));
        
        // Compute the SHA-256 hash of the concatenated input
        bytes32 hash = sha256(abi.encodePacked(input));
        
        // Check if the first 5 hex digits (20 bits) are zero
        return uint256(hash) < 0x00000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    }
}
