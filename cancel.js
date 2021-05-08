const Web3 = require("web3");

const ABI= [
	{
		"constant": false,
		"inputs": [
			{
				"name": "sellToken",
				"type": "address"
			},
			{
				"name": "buyToken",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "priceMul",
				"type": "uint256"
			},
			{
				"name": "priceDiv",
				"type": "uint256"
			},
			{
				"name": "ring",
				"type": "address"
			}
		],
		"name": "sellERC20TokenWithRing",
		"outputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "orderCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMul",
				"type": "uint256"
			},
			{
				"name": "newDiv",
				"type": "uint256"
			}
		],
		"name": "changeTradeMiningPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "feeMul",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "treasury",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tradeMiningMul",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "calcFees",
		"outputs": [
			{
				"name": "fees",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "remainingAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "feeDiv",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "buyOrderWithEth",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "tokenFallback",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "fees",
				"type": "uint256"
			},
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "tradeMiningAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tradeMiningBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "buyToken",
				"type": "address"
			},
			{
				"name": "priceMul",
				"type": "uint256"
			},
			{
				"name": "priceDiv",
				"type": "uint256"
			}
		],
		"name": "sellEther",
		"outputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "orderId",
				"type": "uint256"
			},
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "buyOrderWithERC20Token",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "token",
				"type": "address"
			},
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "isOrderActive",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "buyToken",
				"type": "address"
			},
			{
				"name": "priceMul",
				"type": "uint256"
			},
			{
				"name": "priceDiv",
				"type": "uint256"
			},
			{
				"name": "ring",
				"type": "address"
			}
		],
		"name": "sellEtherWithRing",
		"outputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "sellToken",
				"type": "address"
			},
			{
				"name": "buyToken",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "priceMul",
				"type": "uint256"
			},
			{
				"name": "priceDiv",
				"type": "uint256"
			}
		],
		"name": "sellERC20Token",
		"outputs": [
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawTradeMining",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tradeMiningDiv",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "desiredSellTokenAmount",
				"type": "uint256"
			},
			{
				"name": "orderId",
				"type": "uint256"
			}
		],
		"name": "getBuyTokenAmount",
		"outputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_saturnToken",
				"type": "address"
			},
			{
				"name": "_treasury",
				"type": "address"
			},
			{
				"name": "_feeMul",
				"type": "uint256"
			},
			{
				"name": "_feeDiv",
				"type": "uint256"
			},
			{
				"name": "_tradeMiningMul",
				"type": "uint256"
			},
			{
				"name": "_tradeMiningDiv",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "sellToken",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "buyToken",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ring",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "priceMul",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "priceDiv",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "NewOrder",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "OrderCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "OrderFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "orderId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "boughtTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "feePaid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Trade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "trader",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Mined",
		"type": "event"
	}
];


async function scan(message) {
    process.stdout.write(message);
    return await new Promise(function(resolve, reject) {
        process.stdin.resume();
        process.stdin.once("data", function(data) {
            process.stdin.pause();
            resolve(data.toString().trim());
        });
    });
}

async function getPrivateKey(web3) {
    while (true) {
        const privateKey = await scan(`Enter Private Key: `);
        return privateKey;
    }
}


async function getGasPrice(web3) {
    while (true) {
        const nodeGasPrice = await web3.eth.getGasPrice();
//        const nodeGasPrice = 100;
        const userGasPrice = await scan(`Enter gas-price or leave empty to use ${nodeGasPrice}: `);
        if (/^\d+$/.test(userGasPrice))
            return userGasPrice;
        if (userGasPrice == "")
            return nodeGasPrice;
        console.log("Illegal gas-price");
    }
}

async function getTransactionReceipt(web3) {
    while (true) {
        const hash = await scan("Enter transaction-hash or leave empty to retry: ");
        if (/^0x([0-9A-Fa-f]{64})$/.test(hash)) {
            const receipt = await web3.eth.getTransactionReceipt(hash);
            if (receipt)
                return receipt;
            console.log("Invalid transaction-hash");
        }
        else if (hash) {
            console.log("Illegal transaction-hash");
        }
        else {
            return null;
        }
    }
}

async function send(web3, account, transaction) {
    try {
        nonce =  await web3.eth.getTransactionCount(account.address);
        console.log("Using Nonce:"+nonce);
        nonceHex = web3.utils.toHex(nonce);
        
        fromAddress = account.address
        console.log("My address:"+fromAddress)

        toAddress = transaction._parent._address;
        console.log("Smart contract address:"+toAddress)

        const options = {
            nonce   : nonceHex,
            from    : fromAddress,
            to      : toAddress,
            value: '0x00',
            data    : transaction.encodeABI(),
            gasLimit: web3.utils.toHex(210000),
            gasPrice: web3.utils.toHex(1 * 1e9) // 1 Gwei
//            gas     : await transaction.estimateGas({from: account.address}),
//            gasPrice: await getGasPrice(web3),
        };
        console.log("Signing transaction.");
        const signed  = await web3.eth.accounts.signTransaction(options, account.privateKey);
        console.log("Sending transaction:"+signed.rawTransaction);
        const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
        return receipt;
    }
    catch (error) {
        console.log(error.message);
        const receipt = await getTransactionReceipt(web3);
        if (receipt)
            return receipt;
    }
}

async function run() {
    const NODE_ADDRESS = "http://localhost:8545";
    const CONTRACT_ADDR = "0x5ef83ab1155786f146c5a00722bef7ab683dc0de";
    const web3        = new Web3(NODE_ADDRESS);
    const PRIVATE_KEY = await getPrivateKey();
    const account     = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);

    const contract    = new web3.eth.Contract(ABI, CONTRACT_ADDR);
    const ORDER_ID    = 5444;
    const transaction = contract.methods.cancelOrder(ORDER_ID);
    const receipt     = await send(web3, account, transaction);
    console.log(JSON.stringify(receipt, null, 4));
    if (web3.currentProvider.constructor.name == "WebsocketProvider")
        web3.currentProvider.connection.close();
}

run();
