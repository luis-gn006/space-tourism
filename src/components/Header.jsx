import homeLogo from '../images/shared/logo.svg'

function Header() {
  return(
    <header className='header'>
        <img className="header__logo" src={homeLogo} alt="imagen del logo"/>
        <div className="header__line"></div>
        <nav className='header__nav'>
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="#home" className="header__nav-link">HOME</a></li>
            <li className="header__nav-item"><a href="destination" className="header__nav-link"><span className="header__nav-bold">01  </span>DESTINATION</a></li>
            <li className="header__nav-item"><a href="#crew" className="header__nav-link"><span className="header__nav-bold">02  </span>CREW</a></li>
            <li className="header__nav-item"><a href="#technology" className="header__nav-link"><span className="header__nav-bold">03  </span>TECHNOLOGY</a></li>
          </ul>
        </nav>
        <button className="header__button"></button>
      </header>
  )
}

export default Header;