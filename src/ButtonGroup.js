import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

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
