import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { safeMint } from '../Diasosi'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')
  const onMintNFT = async () => {
    // setGlobalState('Loading', {
    //   show: true,
    //   msg: 'Minting new NFT to your account.',
    // })

    await safeMint()
      // .then(() => setAlert('Minting successful...', 'green'))
      // .catch(() => setGlobalState('loading', {show: false, msg: ''}))
  }
  
  return (
    <div className="bg-[url('https://www.pexels.com/photo/illuminated-art-gallery-with-neon-lights-12389879.jpeg')]
    bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center items-center 
            mx-auto py-10">
                <h1 className="text-white text-5xl font-bold text-center">
                  Dsos Varieties <br />
                  <span className="text-gradient">NFTs Gallery</span> 
                  </h1>

                  <p className="text-white font-semibold text-sm mt-3">
                    Collections of classic aesthetic NFTs
                  </p>

                  <button className="shadow-xl shadow-black text-white
                  bg-[#e32970] hover:bg-[#bd25] p-2
                  rounded-full cursor-pointer my-4"
                  onClick={onMintNFT}
                  >
                    Mint NFT
                    </button>

                    <p className="text-white text-sm font-medium text-center">
                      This work is more like an humanitarian endeavour, <br />
                      targeted at young gifted hands and otherwise helpless <br />
                      talented artists who does not have the priviledge of
                      showcasing <br /> their products and excellent cerebral 
                      prowess through their <br /> creative work of art.   
                    </p>

                    <ul 
                      className='flex flex-row justify-center space-x2
                    items-center my-4'
                    >
                      <a className='bg-white hover:scale-50 transition-all 
                      duration-75 delay-75 rounded-full mx-2' href="#">
                          <img className='w-7 h-7 ' src={facebook} alt="Github" />
                      </a>
                      <a className='bg-white hover:scale-50 transition-all 
                      duration-75 delay-75 rounded-full mx-2' href="#">
                          <img className='w-7 h-7 ' src={twitter} alt="Github" />
                      </a>
                      <a className='bg-white hover:scale-50 transition-all 
                      duration-75 delay-75 rounded-full mx-2' href="#">
                          <img className='w-7 h-7 ' src={linkedIn} alt="Github" />
                      </a>
                      <a className='bg-white hover:scale-50 transition-all 
                      duration-75 delay-75 rounded-full mx-2' href="#">
                          <img className='w-7 h-7 ' src={github} alt="Github" />
                      </a>
                    </ul>

                    <div className='shadow-xl shadow-black flex flex-row justify-center
                    items-center w-10 h-10 rounded-full bg-[#bd255f] cursor-pointer
                    p-3 ml-4 text-white hover:bg-black hover:text-white'>
                      <span className='text-sm font-bold'>{nfts.length}/50</span>
                      
                    </div>
                    <div className='text-sm bg-gradient justify-center ml-4
                    rounded-full text-white'>NFT counter</div>
            </div>
    </div>
  )
}

export default Hero