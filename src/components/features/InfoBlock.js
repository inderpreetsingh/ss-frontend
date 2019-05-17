import React from 'react';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';

class InfoBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };

    this.onOptionHover = this.onOptionHover.bind(this);
  }

  onOptionHover(index) {
    const { active } = this.state;
    if (active !== index) {
      this.setState({ active: index });
    }
  }

  render() {
    const {
      data: {
        title,
        options,
      },
      index,
      images,
      customRef,
    } = this.props;
    const { active } = this.state;

    const Title = title;
    const BgIcon = options[active].icon;

    return (
      <div className="info-block" ref={customRef}>
        <div className="text-wrapper">
          <div className="text description">
            <span>{index + 1}.</span>
            <Title />
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider">
            {
              images.map(({ node: { childImageSharp: { fluid } } }) => (
                <Fade
                  key={fluid.src}
                  when={options[active].img === fluid.src.split('/').pop()}
                >
                  <Img
                    fluid={fluid}
                  />
                </Fade>
              ))
            }
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text options">
            <ul>
              {
                options.map(({ icon, heading, description }, id) => {
                  const Icon = icon;
                  return (
                    <li
                      className={active === id ? 'active' : ''}
                      onMouseOver={() => this.onOptionHover(id)}
                    >
                      <div className="title">
                        <Icon />
                        <h4>{heading}</h4>
                      </div>
                      <p>{description}</p>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <BgIcon className="bg-icon" />
      </div>
    );
  }
}

export default InfoBlock;
