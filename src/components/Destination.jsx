import Header from '../components/Header';
import moon from '../images/destination/image-moon.webp'

function Destination() {
  return (
    <div className="destination">
      <Header />
      <main className="destination__main">
        <h2 className="destination__subtitle">01 PICK YOUR DESTINATION</h2>
        <img src={moon} alt="imagen de " className="destination__image" />
        <div className="destination__description">
          <nav className='destination__nav'>
            <ul className="destination__nav-list">
              <li className="destination__nav-item"><a href="/" className="destination__nav-link">MOON</a></li>
              <li className="destination__nav-item"><a href="destination" className="destination__nav-link">MARS</a></li>
              <li className="destination__nav-item"><a href="#crew" className="destination__nav-link">EUROPA</a></li>
              <li className="destination__nav-item"><a href="#technology" className="destination__nav-link">TITAN</a></li>
            </ul>
          </nav>
          <h3 className="destination__title">MOON</h3>
          <p className="destination__description">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </div>
        <div className="destination__line"></div>
        <div className="destination__info">
          <div className="destination__distance">
            <h4 className="destination__distance-title">AVG. DISTANCE</h4>
            <p className="destination__distance-km">384,400 km</p>
          </div>
          <div className="destination__time">
          <h4 className="destination__time-title">EST. TRAVEL TIME</h4>
          <p className="destination__time-days">3 days</p>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Destination;
