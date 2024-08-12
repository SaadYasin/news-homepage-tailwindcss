import hero_1 from '../assets/images/hero02-02_s.jpg'
import HeroText from './HeroText'
const HeroSection = () => {
  return (
    <section>
      {/* Hero image */}
      <div>
        <img className='w-full h-[845px] object-cover relative' src={hero_1} alt="Hero Image one" />
      </div>

      {/* Overlay */}
      <div className="hero__overlay absolute top-0 bottom-0 left-0 right-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 bg-black/30 "></div>
      <HeroText />

    </section>
  )
}

export default HeroSection