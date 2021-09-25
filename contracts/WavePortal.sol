pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

	uint256 totalWaves;

	constructor() {
		console.log("Solidity: WavePortal constructor");
	}

	function wave() public {
		totalWaves += 1;
		console.log("Solidity: %s has waved", msg.sender);
	}

	function getTotalWaves() public view returns (uint256) {
		console.log("Solidity: We have %d total waves", totalWaves);
		return totalWaves;
	}
}
