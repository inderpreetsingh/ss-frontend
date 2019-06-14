import React from 'react';

import abstract1 from '../../images/features/abstract_1.jpg';
import abstract2 from '../../images/features/abstract_2.jpg';
import abstract3 from '../../images/features/abstract_3.jpg';

import Filter from '../../icons/filter.svg';
import Photo from '../../icons/photo.svg';
import Coding from '../../icons/coding.svg';
import Chart from '../../icons/chart.svg';
import Calendar from '../../icons/calendar.svg';
import CreditCard from '../../icons/credit-card.svg';
import LandingPage from '../../icons/landing-page.svg';
import Chat from '../../icons/chat.svg';

export default [
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
        img: abstract1,
        heading: 'Beautiful directory with filters',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Photo,
        img: abstract2,
        heading: 'Patented media Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Coding,
        img: abstract3,
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
        img: abstract1,
        heading: 'Provide valuable data insights',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Calendar,
        img: abstract2,
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
        img: abstract1,
        heading: 'Financial Management',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: LandingPage,
        img: abstract2,
        heading: 'Intuitive Dashboard',
        description: `SkillShape's beautiful directory highlights your school 
        and it's offerings, and makes it easy for students to find what they need.`,
      },
      {
        icon: Chat,
        img: abstract3,
        heading: 'Connect with students',
        description: `SkillShape's beautiful directory highlights your school
        and it's offerings, and makes it easy for students to find what they need.`,
      },
    ],
  },
];
