// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    string public baseImage = ".webp";
    string public baseExtension = ".json";
    uint256 MAX_SUPPLY = 100000;


    using Strings for uint256;

    string baseURI;


    event onSale(
        uint256 id,
        address indexed buyer,
        string indexed tokenURI,
        uint256 timestamp
    );

    struct mintSale {
        uint256 id;
        address buyer;
        string imageURL;
        uint256 timestamp;
    }

    mintSale[] mintedNFT;
    

    constructor(
    string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        setURI(_initBaseURI);
    }
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(string memory uri) public   {
        
        require(_tokenIdCounter.current() <= MAX_SUPPLY, "Max. supply reached");
        require(!paused(), "maintenance ongoing");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);


         mintedNFT.push(
            mintSale(
                tokenId,
                msg.sender,
                tokenURI(tokenId),
                block.timestamp
            )
         );
          emit onSale(tokenId, msg.sender,  tokenURI(tokenId), block.timestamp);
    }

    function toImage(uint256 tokenId) internal view returns (string memory) {
        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseImage))
            : "";
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal onlyOwner override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
     function setURI(string memory _newURI) public onlyOwner {
        baseURI = _newURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    function getAllNFTs() public view returns (mintSale[] memory) {
        return mintedNFT;
    }
}
