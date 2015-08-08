import '../style/kuma/src/less/kuma.less';
import React from 'react';
import {Button, ButtonGroup} from '../index.js';
import ExampleCode from 'exampleCode';

React.render(
	<div>
		<ExampleCode>
			{`
			<div>
				default:
				<Button>Confirm</Button>
			</div>
			<div>
				size:
				<Button size="small">small</Button>
				<Button size="medium">medium</Button>
				<Button size="large">large</Button>
			</div>
			<div>
				status:
				<Button disabled>disabled</Button>
			</div>
			<div>
				color:
				<Button color="blue">default blue</Button>
				<Button color="orange">orange</Button>
				<Button color="white">white</Button>
			</div>
			<div>
				button group:
				<ButtonGroup>
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<br/>
				<ButtonGroup>
					<Button size="small" color="orange">Left</Button>
					<Button size="small" color="orange">Middle</Button>
					<Button size="small" color="orange">Middle</Button>
					<Button size="small" color="orange">Right</Button>
				</ButtonGroup>
				<div>
					add event:
					<Button onClick={function(){alert('click me')}}>click me</Button>
				</div>
			</div>`}
		</ExampleCode>
		<div>
			default:
			<Button>Confirm</Button>
		</div>
		<div>
			size:
			<Button size="small">small</Button>
			<Button size="medium">medium</Button>
			<Button size="large">large</Button>
		</div>
		<div>
			status:
			<Button disabled>disabled</Button>
		</div>
		<div>
			color:
			<Button color="blue">default blue</Button>
			<Button color="orange">orange</Button>
			<Button color="white">white</Button>
		</div>
		<div>
			button group:
			<ButtonGroup>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
			<br/>
			<ButtonGroup>
				<Button size="small" color="orange">Left</Button>
				<Button size="small" color="orange">Middle</Button>
				<Button size="small" color="orange">Middle</Button>
				<Button size="small" color="orange">Right</Button>
			</ButtonGroup>
		</div>
		<div>
			add event:
			<Button onClick={function(){alert('click me')}}>click me</Button>
		</div>
	</div>,
	document.getElementById('content')
);
