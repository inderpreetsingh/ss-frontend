import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import ProgressBar from './features/ProgressBar';
import InfoBlock from './features/InfoBlock';

import Calendar from '../icons/calendar.svg';
import Chart from '../icons/chart.svg';
import Chat from '../icons/chat.svg';
import Coding from '../icons/coding.svg';
import CreditCard from '../icons/credit-card.svg';
import Filter from '../icons/filter.svg';
import LandingPage from '../icons/landing-page.svg';
import Photo from '../icons/photo.svg';

const blocks = [
  {
    title: () => (
      <>
        <h1>Bring more students in your school.</h1>
        <h4>
          <b>Get found, build your online presence and increase your revenue </b>
          with patented tools that you can use here on skillshape
          <b> for free </b>
          or even embed them on your own website.
        </h4>
      </>
    ),
    options: [
      {
        icon: Filter,
        img: 'abstract_1.jpg',
        heading: 'Beautiful directory with filters',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Photo,
        img: 'abstract_2.jpg',
        heading: 'Patented media Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Coding,
        img: 'abstract_3.jpg',
        heading: 'Embed tools for your own website',
        description: `SkillShape's beautiful directory highlights your school
        and it's offerings, and makes it easy for students to find what they need.`,
      },
    ],
  },
  {
    title: () => (
      <>
        <h1>Keep students excited about school.</h1>
        <h4>
          <b>Get found, build your online presence and increase your revenue </b>
          with patented tools that you can use here on skillshape
          <b> for free </b>
          or even embed them on your own website.
        </h4>
      </>
    ),
    options: [
      {
        icon: Chart,
        img: 'abstract_1.jpg',
        heading: 'Provide valuable data insights',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Calendar,
        img: 'abstract_2.jpg',
        heading: 'Track attendance',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
    ],
  },
  {
    title: () => (
      <>
        <h1>Manage school's administrative chores.</h1>
        <h4>
          <b>Get found, build your online presence and increase your revenue </b>
          with patented tools that you can use here on skillshape
          <b> for free </b>
          or even embed them on your own website.
        </h4>
      </>
    ),
    options: [
      {
        icon: CreditCard,
        img: 'abstract_1.jpg',
        heading: 'Financial Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: LandingPage,
        img: 'abstract_2.jpg',
        heading: 'Intuitive Dashboard',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Chat,
        img: 'abstract_3.jpg',
        heading: 'Connect with students',
        description: `SkillShape's beautiful directory highlights your school
        and it's offerings, and makes it easy for students to find what they need.`,
      },
    ],
  },
];

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuSticky: false,
    };

    this.steps = []; // Array with refs to steps' info blocks.
    this.stickyMenu = React.createRef();
    this.featuresSection = React.createRef();

    this.goToStep = this.goToStep.bind(this);
    this.toggleMenuSticky = this.toggleMenuSticky.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleMenuSticky);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleMenuSticky);
  }

  toggleMenuSticky() {
    requestAnimationFrame(() => {
      const { isMenuSticky } = this.state;

      // For better browser support.
      const screenHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      // For better browser support.
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop;

      const newIsMenuSticky = scrollTop > screenHeight;

      if (newIsMenuSticky !== isMenuSticky) {
        this.setState({
          isMenuSticky: newIsMenuSticky,
        });
      }
    });
  }

  goToStep(index) {
    window.scrollTo({
      top: this.steps[index].offsetTop - this.stickyMenu.current.offsetHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { isMenuSticky } = this.state;

    return (
      <section className="features" ref={this.featuresSection}>
        <div className={`top ${isMenuSticky ? 'sticky' : ''}`} ref={this.stickyMenu}>
          <div className="steps">
            <ol>
              <li
                onClick={() => this.goToStep(0)}
              >
                Bring more students.
              </li>
              <li
                onClick={() => this.goToStep(1)}
              >
                Keep students excited.
              </li>
              <li
                onClick={() => this.goToStep(2)}
              >
                Hassle-free administration.
              </li>
            </ol>
          </div>
          <ProgressBar featuresSectionRef={this.featuresSection} />
        </div>
        <div className="content">
          <StaticQuery
            query={graphql`
            query {
              allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"}, sourceInstanceName:{eq:"features"}}) {
                edges {
                  node {
                    childImageSharp {
                      fluid(quality: 100, maxWidth: 1080, maxHeight: 720) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              } 
             
            }
          `}
            render={({ allFile: { edges } }) => (
              <>
                {
                  blocks.map((data, index) => (
                    <InfoBlock
                      /* eslint-disable-next-line no-return-assign */
                      customRef={el => this.steps[index] = el}
                      data={data}
                      index={index}
                      images={edges}
                    />
                  ))
                }
              </>
            )}
          />
        </div>
      </section>
    );
  }
}

export default Features;
