
const hre=require('hardhat');

async function main() {
    //0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
    const CrowdFunding=await hre.ethers.getContractFactory('CrowdFunding');
    const crowdFunding=await CrowdFunding.deploy();

    await crowdFunding.waitForDeployment();

    const contractAddress = await crowdFunding.getAddress();

    console.log("Contract deployed to:", contractAddress);

}

main()
    .then(() => console.log("Successfully deployed!"))
    .catch((err) => console.error("Error:", err));

