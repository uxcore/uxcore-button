// import Button, {ButtonGroup} from '../src';
let Button = require('../src');
console.log(Button);

class Demo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div>
					<h2>{"default:"}</h2>
					<Button className="xxxx">Confirm</Button>
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
					<h2>{"type:"}</h2>
					<Button type="primary">default primary</Button>
					<Button type="secondary">secondary</Button>
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
