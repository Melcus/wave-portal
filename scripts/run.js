const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()

    await waveContract.deployed() // wait for the contract to be mined

    console.log("run.js: Contract deployed @ address:", waveContract.address) // Print contract address
    console.log("run.js: Contract deployed by:", owner.address); // Print owner address

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave() // Notify miners of what we want
    await waveTxn.wait() // wait for it to be mined

    waveTxn = await waveContract.connect(randomPerson).wave(); // use a different initiator
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    console.log("run.js: Done waving")
}


const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()
