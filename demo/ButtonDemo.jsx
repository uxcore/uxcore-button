const React = require('react');
const Icon = require('uxcore-icon');

const Button = require('../src');

const { ButtonGroup } = Button;


/* eslint-disable react/prefer-stateless-function */

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>{'default:'}</h2>
          <Button htmlType="submit" className="xxxx">Confirm</Button>
        </div>
        <div>
          <h2>{'size:'}</h2>
          <Button size="small">small</Button>
          <Button size="medium">medium</Button>
          <Button size="large">large</Button>
        </div>
        <div>
          <h2>{'status:'}</h2>
          <Button disabled>disabled</Button>
        </div>
        <div>
          <h2>{'type:'}</h2>
          <Button type="primary">default primary</Button>
          <Button type="secondary">secondary</Button>
          <Button type="outline">outline</Button>
        </div>
        <div>
          <h2>{'add event:'}</h2>
          <Button onClick={function () { alert('click me'); }}>click me</Button>
        </div>
        <div>
          <h2>{'loading:'}</h2>
          <Button loading size="small">small</Button>
          <Button loading size="medium">medium</Button>
          <Button loading size="large">large</Button>
          <Button loading type="primary">primary</Button>
          <Button loading type="secondary">secondary</Button>
          <Button loading type="outline">outline</Button>
        </div>
        <div>
          <h2>{'图标按钮'}</h2>
          <Button size="small"><Icon name="xiazai" />small</Button>
          <Button size="medium"><Icon name="xiazai" />medium</Button>
          <Button size="large"><Icon name="xiazai" />large</Button>
          <Button type="primary"><Icon name="xiazai" />primary</Button>
          <Button type="secondary"><Icon name="xiazai" />secondary</Button>
          <Button type="outline"><Icon name="xiazai" />outline</Button>
        </div>
        <div>
          <h2>button group:</h2>
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

module.exports = Demo;
