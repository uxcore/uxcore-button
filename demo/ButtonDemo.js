let Button = require('../src');

class Demo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h2>{"default:"}</h2>
					<Button>Confirm</Button>
				</div>
				<div>
					<h2>{"size:"}</h2>
					<Button size="small">small</Button>
					<Button size="medium">medium</Button>
					<Button size="large">large</Button>
				</div>
				<div>
					<h2>{"status:"}</h2>
					<Button disabled>disabled</Button>
				</div>
				<div>
					<h2>{"color:"}</h2>
					<Button color="blue">default blue</Button>
					<Button color="orange">orange</Button>
					<Button color="white">white</Button>
				</div>
				<div>
					<h2>{"add event:"}</h2>
					<Button onClick={function(){alert('click me')}}>click me</Button>
				</div>
			</div>
		);
	}
}

module.exports = Demo;
