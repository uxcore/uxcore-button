import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const sizeMap = {
        small: 'sm',
        medium: '',
        large: 'lg'
    },
    typeMap = {
        primary: 'primary',
        secondary: 'secondary',
        outline: 'outline',
        disabled: 'disabled'
    },
    clsPrefix = 'kuma-button';


class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        let {type, disabled, className, size, children, htmlType, ...others} = props;
        type = disabled ? 'disabled' : type;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${sizeMap[size]}`] = true;
        }
        let classNames = classnames(clsPrefix, `${clsPrefix}-${typeMap[type]}`, clsObj);
        return (
            <button
                type={htmlType}
                className={classNames} 
                disabled={disabled} 
                {...others}>
              {props.children}
            </button>
        );
    }
}
Button.displayName = 'uxcore-button';
Button.propTypes = {
    /**
     * @title 尺寸
     */
    size: React.PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * @title 样式
     */
    style: React.PropTypes.object,
     /**
     * @title 类型
     */
    type: React.PropTypes.oneOf(['primary', 'secondary', 'outline', 'disabled']),
    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: React.PropTypes.bool,
    /**
     * @title 类名
     * @veIgnore
     */
    className: React.PropTypes.string,
    /**
     * @title 内容
     */
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    /**
     * @title <button> 的 type
     * @veIgnore
     */
    htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
};
Button.defaultProps = {
    size: 'medium',
    type: 'primary',
    disabled: false,
    className: '',
    children: 'Button',
    htmlType: 'button'
};

module.exports = Button;
