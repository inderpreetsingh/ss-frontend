import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';

import Parallax from './Parallax';
import { TEXT } from '../locals';

const { MAIN } = TEXT;

export default ({ theme }) => {
  const data = useStaticQuery(graphql`
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
          `);

  return (
    <Parallax>
      {data.allFile.edges.map(({ node: { childImageSharp: { fluid } } }) => (
        <Fade
          key={fluid.src}
          when={theme.img === fluid.src.split('/').pop()}
        >
          <Img
            fluid={fluid}
            alt={MAIN.BACKGROUND_ALT}
          />
        </Fade>
      ))}
    </Parallax>
  );
};
