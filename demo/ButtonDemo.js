let {Button, ButtonGroup} = require('../src');

class Demo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<span>{"default:"}</span>
					<Button>Confirm</Button>
				</div>
				<div>
					<span>{"size:"}</span>
					<Button size="small">small</Button>
					<Button size="medium">medium</Button>
					<Button size="large">large</Button>
				</div>
				<div>
					<span>{"status:"}</span>
					<Button disabled>disabled</Button>
				</div>
				<div>
					<span>{"color:"}</span>
					<Button color="blue">default blue</Button>
					<Button color="orange">orange</Button>
					<Button color="white">white</Button>
				</div>
				<div>
					<span>{"button group:"}</span>
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
					<span>{"add event:"}</span>
					<Button onClick={function(){alert('click me')}}>click me</Button>
				</div>
			</div>
		);
	}
}

module.exports = Demo;
