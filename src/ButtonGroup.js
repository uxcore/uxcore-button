import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

class ButtonGroup extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let count = React.Children.count(this.props.children);
		return (
			<div className="kuma-button-group">
				{this.props.children.map((child, idx) => {
					let cls;
					if (idx === 0) {
						cls = 'kuma-group-left';
					} else if (idx === count - 1) {
						cls = 'kuma-group-right';
					} else {
						cls = 'kuma-group-middle';
					}
					return React.cloneElement(child, {
						additionClass: cls,
						key: idx
					});
				})}
			</div>
		)
	}
}
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
};
ButtonGroup.defaultProps = {
};

module.exports = ButtonGroup;
