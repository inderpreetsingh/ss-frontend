import React from 'react';
import Fade from 'react-reveal/Fade';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import 'normalize.css';
import '../styles/main.scss';

const themes = ['red', 'green', 'yellow'];

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
    const currentTheme = counter % 3;

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
              {data.allFile.edges.map(({ node }, index) => (
                <Fade when={currentTheme === index}>
                  <Img
                    fluid={node.childImageSharp.fluid}
                    alt="Background"
                  />
                </Fade>
              ))}
            </div>
          )}
        />
        <div className="main-text">
          <div className="lines">
            <span className={`red ${currentTheme === 0 && 'active'}`} />
            <span className={`green ${currentTheme === 1 && 'active'}`} />
            <span className={`yellow ${currentTheme === 2 && 'active'}`} />
          </div>
          <h2>
            A platform for
            <span> institutes  </span>
            that make the world a
          </h2>
          <h1>
            <span className={themes[currentTheme]}> Stronger </span>
            Place.
          </h1>
          <div className="buttons-wrapper">
            <button className="plain-btn">
              <h3>I am a student</h3>
            </button>
            <button className={`color-btn ${themes[currentTheme]}`}>
              <h3> Sign up as a school </h3>
            </button>
          </div>
          <h4>
            Hurry up!
            <span> It's free </span>
            for a limited time.
          </h4>
        </div>
        <div className="learn-more-block">
          <button>
            <h4> Learn More </h4>
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
