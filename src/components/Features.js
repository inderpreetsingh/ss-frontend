import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuSticky: false,
    };

    this.content = React.createRef();

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

      console.log('scrolled', scrolled);
    });
  }

  render() {
    const { isMenuSticky } = this.state;

    return (
      <section className="features">

        <div className={`top ${isMenuSticky ? 'sticky' : ''}`}>
          <ol className="steps">
            <li>Bring more students.</li>
            <li>Keep students excited.</li>
            <li>Hassle-free administration.</li>
          </ol>
          <div className="progress-bar">
            <span className="point" />
            <span className="line" />
            <span className="point" />
            <span className="line" />
            <span className="point" />
          </div>
        </div>

        <div className="content" ref={this.content}>

          <div className="info-block">
            <div className="text-wrapper">
              <div className="text description">
                <h2>Bring more students in your school.</h2>
                <p>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </p>
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
                    <h6>Beautiful directory with filters</h6>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h6>Patented media Management</h6>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h6>Embed tools for your own website</h6>
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
                <h2>Keep students excited about school.</h2>
                <p>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </p>
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
                    <h6>Provide valuable data insights</h6>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h6>Track attendance</h6>
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
                <h2>Manage school's administrative chores.</h2>
                <p>
                  <b>Get found, build your online presence and increase your revenue </b>
                  with patented tools that you can use here on skillshape
                  <b> for free </b>
                  or even embed them on your own website.
                </p>
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
                    <h6>Financial Management</h6>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h6>Intuitive Dashboard</h6>
                    <p>
                      SkillShape's beautiful directory highlights your school and
                      it's offerings, and makes it easy for students to find what they need.
                    </p>
                  </li>
                  <li>
                    <div className="icon" />
                    <h6>Connect with students</h6>
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
