import { setAlert, setGlobalState, useGlobalState } from '../store'
import { safeMint } from '../Diasosi'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')
  const onMintNFT = async () => {
    // setGlobalState('Loading', {
    //   show: true,
    //   msg: 'Minting your NFT into your wallet.',
    // })

    await safeMint()
      // .then(() => setAlert('Minting successful...', 'green'))
      // .catch(() => setGlobalState('loading', {show: false, msg: ''}))
  }
  
  return (
    <div className="bg-[url('https://images.pexels.com/photos/2149422/pexels-photo-2149422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
    bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center 
            mx-auto py-10">
                <h1 className="text-black text-5xl font-bold text-center">
                  Dsos Varieties <br />
                  <span className="text-black">NFTs Gallery</span> 
                  </h1>

                  <p className="text-black font-semibold font-bold text-sm mt-3">
                    Collections of classic aesthetic NFTs
                  </p>

                  <button className="shadow-xl font-semibold shadow-black text-black
                  bg-[#e32970] hover:bg-[#bd25] p-2
                  rounded-full cursor-pointer my-4"
                  onClick={onMintNFT}
                  >
                    Mint NFT
                    </button>

                    <p className="text-black text-sm font-bold font-medium text-center">
                      This work is more like an humanitarian endeavour, <br />
                      targeted at young gifted hands and otherwise helpless <br />
                      talented artists who does not have the priviledge of
                      showcasing <br /> their products and excellent cerebral 
                      prowess through their <br /> creative work of art.   
                    </p>
                      <div
                        className='shadow-xl shadow-black flex justify-center
                            items-center w-10 h-10 rounded-full bg-black
                            cursor-pointer p-3 ml-4 text-white hover:bg-[#hbd255f]
                            hover:text-white transtion-all duration-75 delay-100'>

                                <span className='text-sm font-bold'>{nfts.length}/50</span>
                            </div>
                    <div className='text-sm font-bold bg-gradient justify-center ml-4
                    rounded-full text-white'>NFT counter</div>
            </div>
    </div>
  )
}

export default Hero