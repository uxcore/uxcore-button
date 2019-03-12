import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import LoadingIcon from './Loading';
import CountDown from './CountDown';

const { Component } = React;

const sizeMap = {
  small: 'sm',
  medium: '',
  middle: '',
  large: 'lg',
};

class Button extends Component {
  handleClick = (e) => {
    const { loading, onClick } = this.props;
    if (loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    let { type } = this.props;
    const {
      disabled,
      className,
      size,
      children,
      htmlType,
      prefixCls,
      loading,
      ghost,
      danger,
      countDown,
      onCountDownEnd,
      ...others
    } = this.props;
    type = disabled ? 'disabled' : type;
    const classNames = classnames(prefixCls, `${prefixCls}-${type}`, {
      [className]: className,
      [`${prefixCls}-${sizeMap[size]}`]: !!sizeMap[size],
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-white`]: type === 'disabled' && this.props.type === 'white',
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-danger`]: danger,
      [`${prefixCls}-has-icon`]: loading
    });
    return (
      <button
        {...others}
        type={htmlType}
        className={classNames}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {loading ? <LoadingIcon className={`${prefixCls}-loading-icon`} /> : null}
        {children}
        {countDown ? <CountDown className={`${prefixCls}-countdown`} time={countDown} callback={onCountDownEnd} /> : null }
      </button>
    );
  }
}

Button.displayName = 'uxcore-button';
Button.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'middle', 'large']),
  style: PropTypes.object,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'white', 'text']),
  className: PropTypes.string,
  children: PropTypes.node,
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  onCountDownEnd: PropTypes.func,
  countDown: PropTypes.number,
};
Button.defaultProps = {
  prefixCls: 'kuma-button',
  size: 'middle',
  type: 'primary',
  disabled: false,
  className: '',
  children: 'Button',
  htmlType: 'button',
  loading: false,
  ghost: false,
  danger: false,
  onCountDownEnd: () => {},
  countDown: undefined,
};

module.exports = Button;
