import React from 'react';

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
    } = this.props;
    const { active } = this.state;

    const Title = title;
    const BgIcon = options[active].icon;

    return (
      <div className="info-block">
        <div className="text-wrapper">
          <div className="text description">
            <span>{index + 1}.</span>
            <Title />
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider" />
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
