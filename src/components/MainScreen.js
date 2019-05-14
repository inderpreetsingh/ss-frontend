import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';

import Parallax from './Parallax';
import { TEXT } from '../locals';

const { MAIN } = TEXT;

const themes = {
  0: {
    color: 'red',
    text: MAIN.THEME[0],
    img: 'martial_arts.jpg',
  },
  1: {
    color: 'green',
    text: MAIN.THEME[1],
    img: 'yoga.jpg',
  },
  2: {
    color: 'yellow',
    text: MAIN.THEME[2],
    img: 'dance.jpg',
  },
};

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: 0,
    };

    this.counter = null;

    this.count = this.count.bind(this);
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

  render() {
    const { currentTheme } = this.state;
    const theme = themes[currentTheme];

    return (
      <section className="main-screen">
        <StaticQuery
          query={graphql`
            query {
              allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"}, sourceInstanceName:{eq:"bg"}}) {
                edges {
                  node {
                    childImageSharp {
                      fluid(quality: 100, maxWidth: 1920, maxHeight: 1080) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <div className="bg-container">
              {data.allFile.edges.map(({ node: { childImageSharp: { fluid } } }) => (
                <Fade
                  key={fluid.src}
                  when={theme.img === fluid.src.split('/').pop()}
                >
                  <Parallax>
                    <Img
                      fluid={fluid}
                      alt={MAIN.BACKGROUND_ALT}
                    />
                  </Parallax>
                </Fade>
              ))}
            </div>
          )}
        />
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
                <Fade when={currentTheme === +i}>
                  <div className="hero-text">
                    <h2>
                      {MAIN.HERO_TEXT[0]}
                      <span>{MAIN.HERO_TEXT[1]}</span>
                      {MAIN.HERO_TEXT[2]}
                    </h2>
                    <h1>
                      <span className={themes[i].color}>
                        {themes[i].text.make}
                      </span>
                      {MAIN.HERO_TEXT[3]}
                    </h1>
                  </div>
                </Fade>
              ))
            }
          </div>
          <div className={`buttons-wrapper ${theme.color}`}>
            <button className="plain-btn">
              <h5>{ MAIN.BTN_STUDENT }</h5>
            </button>
            <button className="color-btn">
              <h5>{ MAIN.BTN_SCHOOL }</h5>
            </button>
          </div>
          <h5 className="hurry-up">
            { MAIN.HURRY_UP[0] }
            <span>{ MAIN.HURRY_UP[1] }</span>
            { MAIN.HURRY_UP[2] }
          </h5>
        </div>
        <div className="learn-more-block">
          <button className={theme.color}>
            <h5>{ MAIN.BTN_LEARN_MORE }</h5>
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
