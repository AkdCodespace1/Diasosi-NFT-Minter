import { useEffect, useState } from 'react'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import { isWallectConnected, loadNfts } from './Diasosi'
import { useGlobalState } from './store'
import image1 from './artworks/1.webp'
import image2 from './artworks/2.webp'
import image3 from './artworks/3.webp'
import image4 from './artworks/4.webp'
import image5 from './artworks/5.webp'
import image6 from './artworks/6.webp'
import image7 from './artworks/7.webp'
import image8 from './artworks/8.webp'
import image9 from './artworks/9.webp'
import image10 from './artworks/10.webp'
import image11 from './artworks/11.webp'
import image12 from './artworks/12.webp'


const images = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12 
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [nfts] = useGlobalState('nfts')
  useEffect(async () => {
    await isWallectConnected().then(() => console.log("Blockchain Running"))
    await loadNfts()
  }, [])

  
    
  
    const handleClick = () => {
     
      setCurrentIndex((currentIndex + 1) % images.length);
    };

    

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero handleClick = {handleClick} /> 
      </div>
        <Artworks artworks={nfts} images = {images} currentIndex = {currentIndex} /> 
        <Footer /> 
        <Alert />
         <Loading /> 
      </div>
  )
}

export default App
