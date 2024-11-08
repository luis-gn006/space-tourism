import Header from '../components/Header';

function Home() {
  return (
    <div className='home'>
      <Header />
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
