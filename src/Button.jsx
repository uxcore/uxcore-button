import React from 'react';
import classnames from 'classnames';

import LoadingIcon from './Loading';

const { Component, PropTypes } = React;

// const LoadingIcon = () => <div />;

const sizeMap = {
  small: 'sm',
  medium: '',
  large: 'lg',
};


class Button extends Component {
  render() {
    const {
      disabled,
      className,
      type,
      size,
      children,
      htmlType,
      prefixCls,
      loading,
      ghost,
      ...others
    } = this.props;
    // type = disabled ? 'disabled' : type;
    const classNames = classnames(prefixCls, `${prefixCls}-${type}`, {
      [className]: className,
      [`${prefixCls}-${sizeMap[size]}`]: !!sizeMap[size],
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ghost`]: ghost,
      [`${prefixCls}-has-icon`]: loading,
    });
    return (
      <button
        {...others}
        type={htmlType}
        className={classNames}
        disabled={disabled}
      >
        {loading ? <LoadingIcon className={`${prefixCls}-loading-icon`} /> : null}
        {children}
      </button>
    );
  }
}

Button.displayName = 'uxcore-button';
Button.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
};
Button.defaultProps = {
  prefixCls: 'kuma-button',
  size: 'medium',
  type: 'primary',
  disabled: false,
  className: '',
  children: 'Button',
  htmlType: 'button',
  loading: false,
  ghost: false,
};

module.exports = Button;
