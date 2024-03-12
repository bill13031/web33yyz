// index.js
const Web3 = require('web3');
const { ethers } = require('ethers');
const { BlockchainUtils } = require('blockchain-utils');
const _ = require('lodash');

// Class representing the functionality of web333dapper
class Web333Dapper {
  // Constructor to initialize the required libraries and dependencies
  constructor(providerUrl, privateKey) {
    this.web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
    this.blockchainUtils = new BlockchainUtils();
    this.lodash = _;

    // If a private key is provided, set it for contract deployment
    if (privateKey) {
      this.wallet = new ethers.Wallet(privateKey, this.provider);
    }
  }

  // Deploy a simple ERC20 token contract
  async deployContract() {
    const MyToken = new ethers.ContractFactory(MyTokenArtifact.abi, MyTokenArtifact.bytecode, this.wallet);
    const myTokenContract = await MyToken.deploy();
    await myTokenContract.deployed();
    return myTokenContract.address;
  }

  // Transfer tokens from one address to another
  async transferTokens(sender, recipient, amount) {
    const myTokenContract = new ethers.Contract(MyTokenArtifact.address, MyTokenArtifact.abi, this.wallet);
    const transaction = await myTokenContract.transfer(recipient, amount);
    await transaction.wait();
    return transaction.hash;
  }

  // Get the ETH balance of a given address
  async getEthBalance(address) {
    const balance = await this.provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  }
}

module.exports = Web333Dapper;
