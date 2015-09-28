import classnames from 'classnames';
const
	sizeMap = {
		small: 'sm',
		medium: '',
		large: 'lg'
	},
	typeMap = {
		primary: 'primary',
		secondary: 'secondary',
		disabled: 'disabled'
	},
	clsPrefix = 'kuma-button';


class Button extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let props = this.props;
		let type = props.disabled ? 'disabled': props.type;
		let clsObj = {};
		if (props.additionClass) {
			clsObj[props.additionClass] = true;
		}
		if (sizeMap[props.size]) {
			clsObj[`${clsPrefix}-${sizeMap[props.size]}`] = true;
		}
		let className = classnames(clsPrefix, `${clsPrefix}-${typeMap[type]}`, clsObj);
		var propEvents = {};
		Object.keys(props).forEach((key)=>{
			if (key.indexOf('on') == 0) {
					propEvents[key] = props[key];
			}
		});
		return (
			<button className={className} disabled={props.disabled} {...propEvents}>{this.props.children}</button>
		)
	}
}
Button.displayName = 'uxcore-button';
Button.propTypes = {
	size: React.PropTypes.oneOf(Object.keys(sizeMap)),
	type: React.PropTypes.oneOf(Object.keys(typeMap)),
	disabled: React.PropTypes.oneOf(['disabled', true, false]),
	additionClass: React.PropTypes.string
};
Button.defaultProps = {
	size: 'medium',
	type: 'primary',
	disabled: false,
	additionClass: ''
};

module.exports = Button;
