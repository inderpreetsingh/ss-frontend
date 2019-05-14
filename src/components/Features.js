import React from 'react';

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
        heading: 'Beautiful directory with filters',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Photo,
        heading: 'Patented media Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Coding,
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
        heading: 'Provide valuable data insights',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Calendar,
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
        heading: 'Financial Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: LandingPage,
        heading: 'Intuitive Dashboard',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Chat,
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

    this.content = React.createRef();

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

  render() {
    const { isMenuSticky } = this.state;

    return (
      <section className="features">
        <div className={`top ${isMenuSticky ? 'sticky' : ''}`}>
          <div className="steps">
            <ol>
              <li>Bring more students.</li>
              <li>Keep students excited.</li>
              <li>Hassle-free administration.</li>
            </ol>
          </div>
          <ProgressBar contentRef={this.content} />
        </div>
        <div className="content" ref={this.content}>
          {blocks.map((data, index) => <InfoBlock data={data} index={index} />)}
        </div>
      </section>
    );
  }
}

export default Features;
