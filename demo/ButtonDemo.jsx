import React from 'react';
import Icon from 'uxcore-icon';
import Button from '../src';
import '../style';

/* eslint-disable react/prefer-stateless-function */

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agreeDisabled: true,
    };
  }
  render() {
    return (
      <div>
        <div>
          <h2>
            default:
          </h2>
          <Button htmlType="submit" className="xxxx">
            Confirm
          </Button>
        </div>
        <div>
          <h2>
            {'size:'}
          </h2>
          <Button size="small">
            small
          </Button>
          <Button size="middle" text>
            middle
          </Button>
          <Button size="large">
            large
          </Button>
        </div>
        <div>
          <h2>
            {'status:'}
          </h2>
          <Button disabled>
            disabled
          </Button>
          <Button disabled type="primary">
            default primary
          </Button>
          <Button disabled type="secondary">
            secondary
          </Button>
          <Button disabled type="outline">
            outline
          </Button>
        </div>
        <div>
          <h2>
            type:
          </h2>
          <Button type="primary">
            default primary
          </Button>
          <Button type="secondary">
            secondary
          </Button>
          <Button type="outline">
            outline
          </Button>
        </div>
        <div>
          <h2>
            danger:
          </h2>
          <Button type="primary" danger>
            default primary
          </Button>
          <Button type="secondary" danger>
            secondary
          </Button>
          <Button type="outline" danger>
            outline
          </Button>
        </div>
        <div>
          <h2>
            {'ghost:'}
          </h2>
          <div
            style={{
              background: 'lightblue',
              margin: '10px 0',
              padding: '10px 0',
            }}
          >
            <Button ghost type="secondary">
              secondary
            </Button>
            <Button ghost type="outline">
              outline
            </Button>
            <Button ghost disabled type="secondary">
              secondary
            </Button>
            <Button ghost disabled type="outline">
              outline
            </Button>
          </div>
          <div
            style={{
              background: '#3D4E5B',
              margin: '10px 0',
              padding: '10px 0',
            }}
          >
            <Button ghost type="white">
              secondary
            </Button>
            <Button ghost type="white" disabled>
              secondary
            </Button>
          </div>
        </div>
        <div>
          <h2>
            {'add event:'}
          </h2>
          <Button onClick={function (e) { alert('click me'); }}>
            click me
          </Button>
        </div>
        <div>
          <h2>
            {'loading:'}
          </h2>
          <Button loading size="small">
            small
          </Button>
          <Button loading size="middle">
            middle
          </Button>
          <Button loading size="large">
            large
          </Button>
          <Button loading type="primary">
            primary
          </Button>
          <Button loading type="secondary">
            secondary
          </Button>
          <Button loading type="outline">
            outline
          </Button>
        </div>
        <div>
          <h2>
            {'图标按钮'}
          </h2>
          <Button size="small">
            <Icon usei name="xiazai" />
            small
          </Button>
          <Button size="middle">
            <Icon usei name="xiazai" />
            middle
          </Button>
          <Button size="large">
            <Icon usei name="xiazai" />
            large
          </Button>
          <Button type="primary">
            <Icon usei name="xiazai" />
            primary
          </Button>
          <Button type="secondary">
            <Icon usei name="xiazai" />
            secondary
          </Button>
          <Button type="outline">
            <Icon usei name="xiazai" />
            outline
          </Button>
        </div>
        <div>
          <h2>
            {'倒计时'}
          </h2>
          <Button
            size="middle"
            disabled={this.state.agreeDisabled}
            countDown={10}
            onCountDownEnd={() => {
              this.setState({
                agreeDisabled: false,
              });
            }}
          >
            同意
          </Button>
        </div>
      </div>
    );
  }
}

export default Demo;
