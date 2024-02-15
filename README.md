# BPAY 

Web3 game for fun

## Technology Stack & Dependencies

- HTML, CSS, and Javascript for the website
- [Solidity](https://soliditylang.org) for writing the smart contracts
- [NodeJS](https://nodejs.org/en) to install Dependencies
- [Hardhat](https://hardhat.org) Web3 development environment
- [Ethers.js](https://docs.ethers.io/v5) To interact with the blockchain

## Getting Started

Clone the repo

```zsh
git clone https://github.com/avaxcadabra/BPAY.gitt
cd BPAY/
```

Install the dependencies

```zsh
npm install
```

.env file

Rename env-example to .env and add your subnet private keys

Deploy on subnet the contracts

```zsh
cd contracts
# deploy the NFT collection
npx hardhat run scripts/deployNFTCollection.js --network network_name
NFT Collection deployed to:0x.....

# deploy the $RUN token
npx hardhat run scripts/deployRunToken.js --network network_name
$RUN token deployed to:0x... 
``` 

Paste the NFT Collection contract address to the claimNft function in blockchain.js

```zsh
const nftContractAddress = "0x...";
```

Paste the $RUN token contract address to the claimTokens function in blockchain.js
```zsh
const runTokenContractAddress = "0x...";
```

Start the server 

```zsh
yarn run start
```

## Credit

Credit to [Dapp University](https://www.youtube.com/watch?v=ZjQzxXhebVc) for the original Web3 game workshop.
