import React from 'react';
import Fade from 'react-reveal/Fade';

// TODO: Rewrite img alt to locals.

class InfoBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.onOptionHover = this.onOptionHover.bind(this);
  }

  onOptionHover(i) {
    const { active } = this.state;
    if (active !== i) {
      this.setState({ active: i });
    }
  }

  render() {
    const {
      data: {
        title,
        options,
      },
      index,
    } = this.props;
    const { active } = this.state;

    const Title = title;
    return (
      <div className="info-block">
        <div className="text-wrapper">
          <div className="text description">
            <span>{index + 1}.</span>
            <Title />
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider">
            {
              options.map(({ img }, i) => (
                <Fade key={img} when={active === i}>
                  <div className="image-wrapper">
                    <img src={img} alt="Option" />
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text options">
            <ul>
              {
                options.map(({ icon, heading, description }, i) => {
                  const Icon = icon;
                  return (
                    <li
                      key={heading}
                      className={active === i ? 'active' : ''}
                      onClick={() => this.onOptionHover(i)}
                    >
                      <div className="title">
                        <Icon />
                        <h4>{heading}</h4>
                      </div>
                      <div className="description-wrapper">
                        <p>{description}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div className="bg-icon-wrapper">
          {
            options.map(({ icon }, i) => {
              const Icon = icon;
              return (
                <Fade key={icon} when={i === active}>
                  <Icon className="bg-icon" />
                </Fade>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default InfoBlock;
