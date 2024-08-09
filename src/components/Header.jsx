import logo from '../assets/images/baider-alyakut-logo.png'
import NavBar from './NavBar'
const Header = () => {
  return (
    <header className="bg-gray-200 sticky top-0 h-[90px] flex place-content-between items-center px-8 sm:px-6 lg:px-18 xl:px-40">
      <img src={logo} alt="Logo image" className='w-[80px] h-[70px]' />
      <NavBar />
    </header>
  )
}

export default Header