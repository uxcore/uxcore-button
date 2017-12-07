/**
 * Button Component for uxcore
 * @author
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import Button from './Button';
import ButtonGroup from './ButtonGroup';

Object.defineProperty(Button, 'ButtonGroup', {
  get() {
    console.warn('Button.ButtonGroup is deprecated, use uxcore-button-group instead');
    return ButtonGroup;
  },
});
export default Button;
