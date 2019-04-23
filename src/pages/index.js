import React from 'react';
import Fade from 'react-reveal/Fade';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import 'normalize.css';
import '../styles/main.scss';

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
              {data.allFile.edges.map(({ node }, index, arr) => (
                <Fade when={counter % arr.length === index}>
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
          <h2>
            A platform for
            <span> institutes  </span>
            that make the world a
          </h2>
          <h1>
            <span> Strong </span>
            Place.
          </h1>
          <div className="buttons-wrapper">
            <button>I ama student </button>
            <button> Sign up as a school </button>
          </div>
          <p>
            Hurry up!
            <span> It's free </span>
            for a limited time.
          </p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
