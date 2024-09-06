// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract DonationContract {
    // Mapping to store donations
    mapping (address => uint256) public donations;

    // Event to log donations
    event DonationReceived(address indexed donor, address indexed recipient, uint256 amount);

    // Function to donate to a recipient
    function donate(address _recipient) public payable {
        // Update the donation amount
        donations[_recipient] += msg.value;

        // Emit event to log the donation
        emit DonationReceived(msg.sender, _recipient, msg.value);
    }

    // Function to withdraw donations
    function withdrawDonations(address _recipient) public {
        // Check if the caller is the recipient
        require(msg.sender == _recipient, "Only the recipient can withdraw donations");

        // Transfer the donations to the recipient
        payable(_recipient).transfer(donations[_recipient]);

        // Reset the donation amount
        donations[_recipient] = 0;
    }

    // Function to get the total donations for a recipient
    function getDonations(address _recipient) public view returns (uint256) {
        return donations[_recipient];
    }
}