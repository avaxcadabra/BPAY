const hre = require("hardhat");

const coinName = "RunnerCollection"
//const coinAddr = "0x50ddc33a56eAC4455c635540034590373b282031"
const coinAddr = "0x1D84f431963A9B569F471cF8d812c2dAB467352a"

async function main() {  
  const contract = await hre.ethers.getContractAt(coinName, coinAddr)
  const contractAddress = contract.address
  console.log(`Address: ${contractAddress}`)

  const tokenCount = await contract.retrieve()
  console.log(tokenCount)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
