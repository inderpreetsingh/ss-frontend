import React from 'react';
import Fade from 'react-reveal/Fade';

import { TEXT } from '../locals';
import Parallax from './Parallax';

import martialArts from '../images/bg/martial_arts.jpg';
import dance from '../images/bg/dance.jpg';
import yoga from '../images/bg/yoga.jpg';

const { MAIN } = TEXT;

const themes = {
  0: {
    color: 'red',
    text: MAIN.THEME[0],
    img: martialArts,
  },
  1: {
    color: 'green',
    text: MAIN.THEME[1],
    img: yoga,
  },
  2: {
    color: 'yellow',
    text: MAIN.THEME[2],
    img: dance,
  },
};

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: 0,
      imagesLoaded: false,
    };

    this.counter = null;

    this.count = this.count.bind(this);
    this.goToNextScreen = this.goToNextScreen.bind(this);
    this.toggleImageLoad = this.toggleImageLoad.bind(this);
  }

  componentDidMount() {
    this.counter = setInterval(this.count, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  count() {
    this.setState(state => ({
      currentTheme: (state.currentTheme + 1) % 3,
    }));
  }

  changeTheme(currentTheme) {
    this.setState({
      currentTheme,
    });

    // To prevent automatic theme change after user click.
    clearInterval(this.counter);
    this.counter = setInterval(this.count, 10000);
  }

  goToNextScreen() {
    const screenHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    window.scrollTo({
      top: screenHeight + 1, // To make menu sticky.
      behavior: 'smooth',
    });
  }

  toggleImageLoad() {
    this.setState(state => ({
      imagesLoaded: !state.imagesLoaded,
    }));
  }

  render() {
    const { currentTheme, imagesLoaded } = this.state;
    const theme = themes[currentTheme];
    const location = '';

    return (
      <section className="main-screen">
        <div className={`bg-container ${imagesLoaded ? 'reveal' : 'hide'}`}>
          <Parallax>
            <Fade when={theme.img === martialArts}>
              <div>
                <img
                  src={martialArts}
                  alt={MAIN.BACKGROUND_ALT}
                  onLoad={this.toggleImageLoad}
                />
              </div>
            </Fade>
            <Fade when={theme.img === yoga}>
              <div>
                <img
                  src={yoga}
                  alt={MAIN.BACKGROUND_ALT}
                />
              </div>
            </Fade>
            <Fade when={theme.img === dance}>
              <div>
                <img
                  src={dance}
                  alt={MAIN.BACKGROUND_ALT}
                />
              </div>
            </Fade>
          </Parallax>
        </div>
        <div className="main-text">
          <div className="lines disable-animations">
            <span
              className={`red ${currentTheme === 0 && 'active'}`}
              onClick={() => this.changeTheme(0)}
            />
            <span
              className={`green ${currentTheme === 1 && 'active'}`}
              onClick={() => this.changeTheme(1)}
            />
            <span
              className={`yellow ${currentTheme === 2 && 'active'}`}
              onClick={() => this.changeTheme(2)}
            />
          </div>
          <div className="changing-text-wrapper">
            {
              Object.keys(themes).map(i => (
                <Fade key={i} when={currentTheme === +i}>
                  <div className="hero-text">
                    <h2>
                      {MAIN.HERO_TEXT[0] + (location ? `in ${location}` : '') + MAIN.HERO_TEXT[1]}
                    </h2>
                    <h1>
                      <span className={themes[i].color}>
                        {themes[i].text.make}
                      </span>
                      {MAIN.HERO_TEXT[2]}
                    </h1>
                    <h2>
                      {MAIN.HERO_TEXT[3]}
                    </h2>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className={`buttons-wrapper ${theme.color}`}>
            <button className="plain-btn">
              <h5>{MAIN.BTN_STUDENT}</h5>
            </button>
            <button className="color-btn">
              <h5>{MAIN.BTN_SCHOOL}</h5>
            </button>
          </div>
          <h5 className="hurry-up">
            {MAIN.HURRY_UP[0]}
            <span>{MAIN.HURRY_UP[1]}</span>
            {MAIN.HURRY_UP[2]}
          </h5>
        </div>
        <div className="learn-more-block">
          <button className={theme.color} onClick={this.goToNextScreen}>
            <h5>{MAIN.BTN_LEARN_MORE}</h5>
          </button>
          <div className="arrows">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    );
  }
}

export default MainScreen;
