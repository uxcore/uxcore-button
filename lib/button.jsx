import React from 'react';

const
	sizeMap = {
		small: 's',
		medium: 'm',
		large: 'l'
	},
	colorMap = {
		blue: 'blue',
		orange: 'orange',
		white: 'white',
		disabled: 'disable'
	};

export default class Button extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var props = this.props;
		var colorType = props.disabled ? 'disabled': props.color;
		var className = `kuma-button kuma-button-${sizeMap[props.size]}${colorMap[colorType]} ${props.additionClass}`;
		var propEvents = {};
		Object.keys(props).forEach((key)=>{
			if (key.startsWith('on')) {
					propEvents[key] = props[key];
			}
		});
		return (
			<button className={className} disabled={props.disabled} {...propEvents}>{this.props.children}</button>
		)
	}
}
Button.displayName = 'button';
Button.propTypes = {
	size: React.PropTypes.oneOf(['large', 'medium', 'small']),
	color: React.PropTypes.oneOf(['blue', 'orange', 'white']),
	disabled: React.PropTypes.oneOf(['disabled', true, false]),
	additionClass: React.PropTypes.string
};
Button.defaultProps = {
	size: 'medium',
	color: 'blue',
	disabled: false,
	additionClass: ''
};
