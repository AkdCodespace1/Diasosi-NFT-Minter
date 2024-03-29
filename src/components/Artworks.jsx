import ethlogo from '../assets/ethlogo.png'
import { useEffect, useState } from 'react'



const Artworks = ({ artworks, images, currentIndex }) => {    
   const [end, setEnd] = useState(4)
   const [showImage, setShowImage] = useState(null)
   const [count] = useState(4) 
   const [nfts, setNfts] = useState([]) 

   const getNfts = () => {
      return artworks.slice(0, end)
   }
  
   useEffect(() => {
      setNfts(getNfts())
   }, [artworks, end])

    return (
    <div className='bg-[#131828] py-10'>
       <div className='w-4/5 mx-auto'>
            <h4 className='text-gradient text-2xl'>NFTs</h4>

            <div className='flex flex-wrap justify-center items-center mt-4'>
            <img src={images[currentIndex]} />
              {nfts.map((nft, i) => (
              <a
              href={nft.url}
              target="_blank"
              key={i}
              
              
                   className={`relative shadow-xl shadow-black p-3
                       bg-white rounded-lg item w-64 h-64 object-contain 
                      bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 
                      cursor-pointer transition-all duration-75 delay-100
                      hover:shadow-[#bd2f]`}
                // style={{backgroundImage: `url(${nft.imageURL})` }}>
               // style={{backgroundImage: `url(${base_uri})` }}
                  style={{backgroundImage: 'url(' + nft.imageURL + ')'}}>
                
                    <div 
                      className='absolute bottom-0 left-0 right-0 
                          flex flex-row justify-between items-center label-gradient
                          p-2 w-full text-white text-sm'>

                      <p>{`Diasosi NFT no.${nft.id}`}</p>
                        
                        <div className='flex justify-center items-center space-x-2'>
                          <img 
                            className='w-5 cursor-pointer'
                            src={ethlogo} 
                           alt="Diasosi logo" 
                           
                          />
                          //{nft.cost}
                        </div>
                        </div>
                        </a>
                ))}
            </div>

            <div className='flex flex-row justify-center items-center mx-auto mt-4'>
              {artworks.length > 0 && artworks.length > nfts.lenth ? (
                <button 
                  className='shadow-xl shadow-black text-white 
                  bg-[#e32970] hover:bg-[#bd25] p-2
                  rounded-full cursor-pointer my-4'
                  onClick={() => setEnd(end + count)}
                >
                  More NFTs</button>
           
           ) : null}
           </div>
       </div>
    </div>
  )
}

export default Artworks