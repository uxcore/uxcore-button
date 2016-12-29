import React from 'react';
import classnames from 'classnames';

const sizeMap = {
  small: 'sm',
  medium: '',
  large: 'lg',
};
const typeMap = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
  disabled: 'disabled',
};

const Button = (props) => {
  let type = props.type;
  const { disabled, className, size, children, htmlType, prefixCls, ...others } = props;
  type = disabled ? 'disabled' : type;
  const clsObj = {};
  if (className) {
    clsObj[className] = true;
  }
  if (sizeMap[size]) {
    clsObj[`${prefixCls}-${sizeMap[size]}`] = true;
  }
  const classNames = classnames(prefixCls, `${prefixCls}-${typeMap[type]}`, clsObj);
  return (
    <button
      {...others}
      type={htmlType}
      className={classNames}
      disabled={disabled}
    >
      {children}
    </button>
    );
};
Button.displayName = 'uxcore-button';
Button.propTypes = {
  prefixCls: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  style: React.PropTypes.object,
  type: React.PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
  className: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
  htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
};
Button.defaultProps = {
  prefixCls: 'kuma-button',
  size: 'medium',
  type: 'primary',
  disabled: false,
  className: '',
  children: 'Button',
  htmlType: 'button',
};

module.exports = Button;
