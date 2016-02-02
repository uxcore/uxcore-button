class ButtonGroup extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="kuma-button-group">{this.props.children}</div>
		)
	}
}
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
};
ButtonGroup.defaultProps = {
};

module.exports = ButtonGroup;
