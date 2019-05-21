import React from 'react';

import themes from './mainScreen/themes';

import HeroText from './mainScreen/HeroText';
import Background from './mainScreen/Background';
import LearnMoreBtn from './mainScreen/LearnMoreBtn';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: 0,
    };

    this.counter = null;

    this.count = this.count.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
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

    return (
      <section className="main-screen">
        <Background currentTheme={currentTheme} />
        <HeroText currentTheme={currentTheme} changeTheme={this.changeTheme} />
        <LearnMoreBtn theme={themes[currentTheme]} />
      </section>
    );
  }
}

export default MainScreen;
