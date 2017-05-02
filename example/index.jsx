import React from 'react';
import ReactDOM from 'react-dom';

import AlertContainer from '../src';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTransitionChange = this.handleTransitionChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleMessageTextChange = this.handleMessageTextChange.bind(this);
    this.state = {
      containerProps: {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 5000,
        transition: 'scale',
      },
      selectedType: 'success',
      messageText: 'Some text or component',
    };
  }

  showAlert() {
    this.msg.show(this.state.messageText, {
      time: 2000,
      type: this.state.selectedType,
      // icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  handleThemeChange(event) {
    this.setState({
      containerProps: Object.assign({}, this.state.containerProps, {
        theme: event.target.value,
      })
    });
  }
  handlePositionChange(event) {
    this.setState({
      containerProps: Object.assign({}, this.state.containerProps, {
        position: event.target.value,
      })
    });
  }
  handleTransitionChange(event) {
    this.setState({
      containerProps: Object.assign({}, this.state.containerProps, {
        transition: event.target.value,
      })
    });
  }
  handleTypeChange(event) {
    this.setState({ selectedType: event.target.value });
  }
  handleMessageTextChange(event) {
    this.setState({ messageText: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Theme </label>
        <select value={this.state.containerProps.theme} ref="asfsdf" onChange={this.handleThemeChange}>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
        <br />

        <label>Position </label>
        <select value={this.state.containerProps.position} onChange={this.handlePositionChange}>
          <option value="bottom left">bottom left</option>
          <option value="top left">top left</option>
          <option value="top right">top right</option>
          <option value="bottom right">bottom right</option>
        </select>
        <br />

        <label>Transition </label>
        <select value={this.state.containerProps.transition} onChange={this.handleTransitionChange}>
          <option value="scale">scale</option>
          <option value="fade">fade</option>
        </select>

        <br /><br />

        <label>Type </label>
        <select value={this.state.selectedType} onChange={this.handleTypeChange}>
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="error">error</option>
        </select>
        <br />

        <label>Text </label>
        <input type="text" value={this.state.messageText} onChange={this.handleMessageTextChange} />

        <br /><br />
        <AlertContainer ref={a => this.msg = a} {...this.state.containerProps} />
        <button onClick={this.showAlert.bind(this)}>Show Alert</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
