import { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CountDown extends Component {
  constructor(props) {
    super(props);
    const { time } = props;
    this.state = {
      time,
    };
    this.countFun = this.countFun.bind(this);
  }

  componentDidMount() {
    const { time } = this.state;
    if (time > 0) {
      this.countFun();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countFun() {
    let { time } = this.state;
    this.timer = setInterval(() => {
      if (time > 0) {
        time -= 1;
        this.setState({
          time,
        });
      } else {
        const { callback } = this.props;
        callback();
        clearInterval(this.timer);
      }
    }, 1000);
  }

  render() {
    const { time } = this.state;
    const { className } = this.props;
    return (
      <span className={classnames({
        [className]: className,
      })}
      >
        {time > 0 ? `(${time})` : ''}
      </span>
    );
  }
}

CountDown.defaultProps = {
  time: 5000,
  callback: () => undefined,
  className: '',
};

CountDown.propTypes = {
  time: PropTypes.number,
  callback: PropTypes.func,
  className: PropTypes.string,
};

export default CountDown;
