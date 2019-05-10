import React from 'react';

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="footer">
        <button className="join-for-free">
          <h6>Join for free</h6>
        </button>
        <div className="content">
          <div className="quote">
            <h3>
              Skillshape has given me the freedom to think about future of my school
              rather than being swamped under administrative chores.
            </h3>
            <h4>
              – Dr. Mark Marlow <br />
              Founder MMA Gym
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
