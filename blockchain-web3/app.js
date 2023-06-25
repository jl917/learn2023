require('dotenv').config()


// // 使用 web3.js 查看账户余额
// const Web3 = require('web3');

// const rpcURL = `${process.env.RPC_URL_SEPOLIA}${process.env.INFURA_KEY}`
// const web3 = new Web3(rpcURL);
// const address = "0xbC4A81326369DD940470E923Aa6e9d2e987Ff3E2";

// web3.eth.getBalance(address, (err, wei) => {
//   balance = web3.utils.fromWei(wei, 'ether')
//   console.log(balance);
// })

// 用web3.js从智能合约中读取数据
// const Web3 = require('web3');

// const rpcURL = `${process.env.RPC_URL_MAINNET}${process.env.INFURA_KEY}`;
// const web3 = new Web3(rpcURL);

// const abi = [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "mintingFinished",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_spender",
//         "type": "address"
//       },
//       {
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_from",
//         "type": "address"
//       },
//       {
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "unpause",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "name": "_amount",
//         "type": "uint256"
//       }
//     ],
//     "name": "mint",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "paused",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "_owner",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "name": "balance",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "finishMinting",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [],
//     "name": "pause",
//     "outputs": [
//       {
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "owner",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "name": "_amount",
//         "type": "uint256"
//       },
//       {
//         "name": "_releaseTime",
//         "type": "uint256"
//       }
//     ],
//     "name": "mintTimelocked",
//     "outputs": [
//       {
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "_owner",
//         "type": "address"
//       },
//       {
//         "name": "_spender",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "name": "remaining",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "newOwner",
//         "type": "address"
//       }
//     ],
//     "name": "transferOwnership",
//     "outputs": [],
//     "payable": false,
//     "type": "function"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Mint",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "MintFinished",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "Pause",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "Unpause",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "name": "spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "name": "from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "name": "to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "name": "value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   }
// ]
// const address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";

// const contract = new web3.eth.Contract(abi, address);

// contract.methods.totalSupply().call((err, result) => { console.log(result) });
// contract.methods.name().call((err, result) => { console.log(result) });
// contract.methods.symbol().call((err, result) => { console.log(result) });
// contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) });


// //
const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3');

const account1 = '0xbC4A81326369DD940470E923Aa6e9d2e987Ff3E2';
const account2 = '0x3658CEd16F1DE65d89833cab290B03Cb0f623466';

const privateKey1 = Buffer.from(process.env.PRIVITE_KEY2, 'hex');

const rpcURL = `${process.env.RPC_URL_SEPOLIA}${process.env.INFURA_KEY}`
const web3 = new Web3(rpcURL);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('0.01', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject, { chain: 'mainnet' })
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log(err);
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
});


