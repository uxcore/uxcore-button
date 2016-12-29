import React from 'react';

const ButtonGroup = props => (<div className="kuma-button-group">{props.children}</div>);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  children: React.PropTypes.any,
};
ButtonGroup.defaultProps = {
};

module.exports = ButtonGroup;
