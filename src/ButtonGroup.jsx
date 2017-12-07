import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = props => (<div className="kuma-button-group">{props.children}</div>);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  children: PropTypes.any,
};
ButtonGroup.defaultProps = {
};

export default ButtonGroup;
