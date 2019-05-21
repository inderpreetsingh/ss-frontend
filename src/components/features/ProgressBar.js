import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.progressBar = React.createRef();

    this.updateProgressBar = this.updateProgressBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateProgressBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateProgressBar);
  }

  updateProgressBar() {
    const { featuresSectionRef } = this.props;
    requestAnimationFrame(() => {
      const content = featuresSectionRef.current;

      // For better browser support.
      const screenHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      // For better browser support.
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop;

      let scrolled = (scrollTop - content.offsetTop) * 100 / (content.scrollHeight - screenHeight);
      if (scrolled < 0) scrolled = 0;
      if (scrolled > 100) scrolled = 100;

      this.progressBar.current.style.width = `${scrolled}%`;
    });
  }

  render() {
    return (
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
                <span className="point"> 1 </span>
                <span className="point"> 2 </span>
                <span className="point"> 3 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;