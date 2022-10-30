// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract T8 {
    string[] private spots = ["alice", "bob", "eve"];

    function get(uint i) public view returns (string memory) {
        return spots[i];
    }
}
