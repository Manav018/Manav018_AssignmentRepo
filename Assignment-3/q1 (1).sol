// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public owner;
    address[] public players;
    
    constructor() {
        owner = msg.sender; // The person deploying the contract is the owner
    }
    
    function enter() public payable {
        // Require that each participant sends a minimum of 0.1 Ether to enter the lottery
        require(msg.value == 0.1 ether, "Minimum lottery entry is 0.1 ETH");
        players.push(msg.sender);
    }
    
    function getPlayers() public view returns (address[] memory) {
        return players;
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function random() private view returns (uint) {
        // Pseudo-random number generator (not secure, used for simplicity)
        return uint(keccak256(abi.encodePacked(owner, block.timestamp, block.difficulty, players)));
    }
    
    function pickWinner() public onlyOwner {
        // Ensure there are players in the lottery
        require(players.length > 0, "No players have entered the lottery");
        
        // Pick a random player as the winner
        uint index = random() % players.length;
        address winner = players[index];
        
        // Transfer the contract's balance to the winner
        payable(winner).transfer(address(this).balance);
        
        // Reset the players array for the next round
        players = new address[](0);
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
}