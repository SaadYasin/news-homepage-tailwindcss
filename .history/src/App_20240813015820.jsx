import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Steps from './components/Steps'
const App =() => {

  return (
    <>
      <div className='bg-darkBg min-h-[100dvh]'>
        <Header />
        <HeroSection />
        <Steps />
        <AboutUs />
        
      </div>
      
    </>
  )
}

export default App
