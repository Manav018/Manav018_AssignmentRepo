# 1)CrowdFunding - Solidity Smart Contract

## Overview

This contract implements a simple crowdfunding system where users can create campaigns, donate funds, and withdraw contributions if the campaign fails to reach its target by the deadline. The campaign owner can finalize the campaign once the deadline is reached and, if successful, collect the funds.

## Features

- **Create Campaign**: Users can create a crowdfunding campaign with a target amount and a deadline.
- **Donate to Campaign**: Users can donate funds to any active campaign.
- **Finalize Campaign**: The campaign owner can finalize the campaign after the deadline and withdraw the collected funds if the target is met.
- **Withdraw Funds**: Donors can withdraw their contributions if the campaign fails to meet the target.

- # 2)VotingSystem - Solidity Smart Contract

## Overview

The `VotingSystem` smart contract allows users to create proposals, vote on them, and track the results. Each user can vote only once for each proposal. The contract also allows users to view the number of votes for a specific proposal and determine the winning proposal based on the highest vote count.

## Features

- **Create Proposal**: Users can create new proposals.
- **Vote on Proposal**: Users can cast a vote for any existing proposal, but each user can only vote once per proposal.
- **Check Proposal Votes**: Users can check how many votes a specific proposal has received.
- **Determine Winner**: Users can find out which proposal has the most votes.
