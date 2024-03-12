# web3
This is a test repository for TEA

## installation
npm install web333dapper

### Usage

```javascript
const Web333Dapper = require('web333dapper');

const dapper = new Web333Dapper('https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY', 'YOUR_PRIVATE_KEY');

// Deploy a simple ERC20 token contract
const contractAddress = await dapper.deployContract();
console.log(`Contract deployed at: ${contractAddress}`);

// Transfer tokens
const transactionHash = await dapper.transferTokens('senderAddress', 'recipientAddress', 100);
console.log(`Transaction hash: ${transactionHash}`);

// Get ETH balance
const ethBalance = await dapper.getEthBalance('0x1234567890123456789012345678901234567890');
console.log(`ETH balance: ${ethBalance} ETH`);
