# Diasosi-NFT-Minter

PROJECT TITTLE: Diasosi NFT Minter


PROJECT DESCRIPTION: 

This project is an NFT Minting dApp, that mints NFTs and lists them in NFT marketplace, the design has put into consideration ease of use therefore it is so simple and straightforward to use. 


LIVE ACCESS URL: 

https://diasosi-nft-minter.vercel.app/


PROJECT AUTHOR: 

David Akande Oluwagbenga


TECHNICAL STACK/TECHNOLOGIES:


React, Tailwind CSS, Hardhat, Ethers Js, Node Js, Solidity, IPFS, Goerli Testnet


DAPP USAGE AND GENERAL TOUR:

The dApp is simple and straight forward to use;
When you load the dApp, it immediately prompts you to connect wallet

 The dApp has a "Connect Wallet" button at the top right corner of the page, there you connect your Ethereum wallet as a means of authentication
 It also has a "Mint NFT" button which performs the minting function in the dApp
 The minted NFT is displayed in the "YOUR NFT" section of the page 

 Please note that the images to be minted have been pre-processed and stored in a decentralized file storage facility called Interplanetary File System (IPFS) with it's unique hash in the storage location so every image will be fetched uniquely 

 Please note very importantly too that addressing the former problem of not seeing what you minting, the new version of the dApp allows the minter 
to see the Artwork to be minted on the frontend immediately the "Mint NFT" button is clicked and that gives the signer the opportunity to sign the 
transaction or reject it. 

 Note also that the "More NFT" button was taken down because it is not required for this version of the dApp as the only Art to be minted per time 
is what is neede to be dispalyed on the frontend.


INTERACTING WITH THE dApp:

The dApp can be accessed  by visiting the link below

https://diasosi-nft-minter.vercel.app/

Or by installing the following dependencies on your machine and hosting the dApp locally on your machine by following the steps described below. 


Step 1. Clone the project by entering the following command on your terminal

git clone https://github.com/AkdCodespace1/Diasosi-NFT-Minter

Step 2. Install dependencies (follow the description below)

In your IDE terminal, enter

 cd <Project Name>  (To navigate to the root folder of the project)

Next, run;  npm install or yarn install  (depending on the package manager you have)

Step 3. Start Hardhat Node

In the terminal, run the command below

yarn hardhat node or npx hardhat node  (to spin up a local node on your machine)

Step 4. Run the Front-end App by running the command below

yarn start or npm start 

Visit the URL in your browser to see your front-end:  http://localhost:3000 


CHANGE LOG:

This is the initial release of this dApp, it is subject to change for scalability and upgrade sake as technology evolves. 


