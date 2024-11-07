import homeLogo from '../images/shared/logo.svg'

function Home() {
  return (
    <div className='home'>
      <header className='home__header'>
        <img src={homeLogo} alt="imagen del logo" className="home__logo" />
        <div className="home__header-line"></div>
        <nav className='header__nav'>
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="#home" className="header__nav-link">HOME</a></li>
            <li className="header__nav-item"><a href="#destination" className="header__nav-link"><span className="header__nav-bold">01  </span>DESTINATION</a></li>
            <li className="header__nav-item"><a href="#crew" className="header__nav-link"><span className="header__nav-bold">02  </span>CREW</a></li>
            <li className="header__nav-item"><a href="#technology" className="header__nav-link"><span className="header__nav-bold">03  </span>TECHNOLOGY</a></li>
          </ul>
        </nav>
        <button className="home__header-button"></button>
      </header>
      <main className="home__main">
        <div className="home__text">
          <p className="home__subtitle">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="home__title">
            SPACE
          </h1>
          <p className="home__paragraph">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <button className="home__main-button">
          EXPLORE
        </button>
      </main>
    </div>
  );
}

export default Home;
