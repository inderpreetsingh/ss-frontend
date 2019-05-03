import React from 'react';
import Fade from 'react-reveal/Fade';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Parallax from '../components/Parallax';
import { TEXT } from '../locals';

import 'normalize.css';
import '../styles/main.scss';

const { MAIN } = TEXT;

const themes = {
  0: {
    color: 'red',
    text: MAIN.THEME[0],
    img: 'bg_1.jpg',
  },
  1: {
    color: 'green',
    text: MAIN.THEME[1],
    img: 'bg_2.jpg',
  },
  2: {
    color: 'yellow',
    text: MAIN.THEME[2],
    img: 'bg_3.jpg',
  },
};

// TODO: Custom cursor.

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.count = this.count.bind(this);
  }

  componentDidMount() {
    setInterval(this.count, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.count);
  }

  count() {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    const themeId = counter % 3;
    const theme = themes[themeId];

    return (
      <Layout>
        <SEO title="Skillshape Landing Page" />
        <StaticQuery
          query={graphql`
            query {
              allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{eq:"images"}}) {
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
                  when={theme.img === fluid.src.slice(-8)}
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
          <div className="lines">
            <span className={`red ${themeId === 0 && 'active'}`} />
            <span className={`green ${themeId === 1 && 'active'}`} />
            <span className={`yellow ${themeId === 2 && 'active'}`} />
          </div>
          <div className="hero-text">
            <h2>
              { MAIN.HERO_TEXT[0] }
              <span>{ MAIN.HERO_TEXT[1] }</span>
              { MAIN.HERO_TEXT[2] }
            </h2>
            <div>
              {
                Object.keys(themes).map(i => (
                  <Fade when={themeId === +i}>
                    <h1>
                      <span className={themes[i].color}>
                        {themes[i].text.make}
                      </span>
                    </h1>
                  </Fade>
                ))
              }
              <h1>{ MAIN.HERO_TEXT[3] }</h1>
            </div>
          </div>
          <div className={`buttons-wrapper ${theme.color}`}>
            <button className="plain-btn">
              <h3>{ MAIN.BTN_STUDENT }</h3>
            </button>
            <button className="color-btn">
              <h3>{ MAIN.BTN_SCHOOL }</h3>
            </button>
          </div>
          <h4>
            { MAIN.HURRY_UP[0] }
            <span>{ MAIN.HURRY_UP[1] }</span>
            { MAIN.HURRY_UP[2] }
          </h4>
        </div>
        <div className="learn-more-block">
          <button>
            <h4>{ MAIN.BTN_LEARN_MORE }</h4>
          </button>
          <div className="arrows">
            <span />
            <span />
            <span />
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
