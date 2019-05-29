import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import CONST from '../const';
import themes from './mainScreen/themes';

import Menu from './mainScreen/Menu';
import HeroText from './mainScreen/HeroText';
import Background from './mainScreen/Background';
import LearnMoreBtn from './mainScreen/LearnMoreBtn';
import LoginSidebar from './mainScreen/LoginSidebar';
import RegistrationSidebar from './mainScreen/RegistrationSidebar';

const { LOGIN, REGISTRATION } = CONST.SIDEBAR_MODE;

// TODO: Remove pointer events from menu.

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: 0,
      showLoginSidebar: false,
      showRegistrationSidebar: false,
    };

    this.counter = null;

    this.count = this.count.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
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

  toggleSidebar(mode) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    this.setState(state => ({
      [`show${mode}Sidebar`]: !state[`show${mode}Sidebar`],
    }), () => {
      const { [`show${mode}Sidebar`]: show } = this.state;

      if (show) {
        disableBodyScroll(null, { reserveScrollBarGap: true });
        clearInterval(this.counter);
      } else {
        enableBodyScroll(null, { reserveScrollBarGap: true });
        this.counter = setInterval(this.count, 10000);
      }
    });
  }

  render() {
    const { currentTheme, showRegistrationSidebar, showLoginSidebar } = this.state;
    const enableAnimations = !showRegistrationSidebar && !showLoginSidebar;

    const toggleLoginSidebar = () => this.toggleSidebar(LOGIN);
    const toggleRegistrationSidebar = () => this.toggleSidebar(REGISTRATION);

    return (
      <>
        <LoginSidebar
          active={showLoginSidebar}
          toggleLoginSidebar={toggleLoginSidebar}
          toggleRegistrationSidebar={toggleRegistrationSidebar}
        />
        <RegistrationSidebar
          active={showRegistrationSidebar}
          toggleLoginSidebar={toggleLoginSidebar}
          toggleRegistrationSidebar={toggleRegistrationSidebar}
        />

        <section className="main-screen">
          <Menu active={enableAnimations} />
          <Background
            currentTheme={currentTheme}
            enableAnimations={enableAnimations}
          />
          <HeroText
            currentTheme={currentTheme}
            changeTheme={this.changeTheme}
            toggleLoginSidebar={toggleLoginSidebar}
            toggleRegistrationSidebar={toggleRegistrationSidebar}
          />
          <LearnMoreBtn
            theme={themes[currentTheme]}
            enableAnimations={enableAnimations}
          />
        </section>
      </>
    );
  }
}

export default MainScreen;
