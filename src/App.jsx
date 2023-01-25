import { useEffect } from 'react'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import { isWallectConnected } from './Diasosi'

const App = () => {
  useEffect(() => {
    isWallectConnected().then(() => console.log("Blockchain Loaded"))
  }, [])
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero /> 
      </div>
        <Artworks /> 
        <Footer /> 
         <Loading /> 
         <Alert />
    </div>
  )
}

export default App
 