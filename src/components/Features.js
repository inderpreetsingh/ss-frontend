import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuSticky: false,
    };

    this.content = React.createRef();
    this.progressBar = React.createRef();

    this.toggleMenuSticky = this.toggleMenuSticky.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleMenuSticky);
    window.addEventListener('scroll', this.updateProgressBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleMenuSticky);
    window.removeEventListener('scroll', this.updateProgressBar);
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

  updateProgressBar() {
    requestAnimationFrame(() => {
      const content = this.content.current;

      // For better browser support.
      const screenHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      // For better browser support.
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop;

      const contentScroll = scrollTop - content.offsetTop;
      let scrolled = 100 * contentScroll / (content.scrollHeight - screenHeight);
      if (scrolled < 0) scrolled = 0;
      if (scrolled > 100) scrolled = 100;

      this.progressBar.current.style.width = `${scrolled}%`;
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
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div className="line">
                <span className="point" />
                <span className="point" />
                <span className="point" />
              </div>
              <div className="filling-wrapper" ref={this.progressBar}>
                <div className="filling">
                  <div className="line">
                    <span className="point" />
                    <span className="point" />
                    <span className="point" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content" ref={this.content}>

          <div className="info-block">
            <div className="text-wrapper">
              <div className="text description">
                <h1>Bring more students in your school.</h1>
                <h4>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </h4>
              </div>
            </div>
            <div className="slider-wrapper">
              <div className="slider" />
            </div>
            <div className="text-wrapper">
              <div className="text options">
                <ul>
                  <li>
                    <div className="icon" />
                    <h4>Beautiful directory with filters</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h4>Patented media Management</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h4>Embed tools for your own website</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-block">
            <div className="text-wrapper">
              <div className="text description">
                <h1>Keep students excited about school.</h1>
                <h4>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </h4>
              </div>
            </div>
            <div className="slider-wrapper">
              <div className="slider" />
            </div>
            <div className="text-wrapper">
              <div className="text options">
                <ul>
                  <li>
                    <div className="icon" />
                    <h4>Provide valuable data insights</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h4>Track attendance</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-block">
            <div className="text-wrapper">
              <div className="text description">
                <h1>Manage school's administrative chores.</h1>
                <h4>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </h4>
              </div>
            </div>
            <div className="slider-wrapper">
              <div className="slider" />
            </div>
            <div className="text-wrapper">
              <div className="text options">
                <ul>
                  <li>
                    <div className="icon" />
                    <h4>Financial Management</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h4>Intuitive Dashboard</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h4>Connect with students</h4>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Features;
