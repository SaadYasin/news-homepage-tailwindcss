import burger from '../assets/images//icon-menu.svg'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center'>
      <ul className="text-[1rem] sm:text-[14px] lg:text-[18px] sm:flex hidden sm:w-[450px] lg:w-[760px] xl:w-[880px] sm:place-content-around sm:text-4 sm:items-center ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our Projects</a>
        </li>
        <li>
          <a href="#">Stats</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* Language selection */}
      <div className='sm:ms-6 me-8 '>
        <select name="language" className='cursor-pointer' id="lang">
          <option value="en" id="lang-option">
            English
          </option>

          <option value="ar" id="lang-option">
            Arabic
          </option>
        </select>
      </div>

      {/* hamburger menu */}
      <img
        className="w-8 h-4 cursor-pointer sm:hidden "
        src={burger}
        alt="Menu Hamburger"
      />
    </div>
  );
}

export default NavBar