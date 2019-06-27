import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { checkHealth, sendMessage } from '../actions';

class Main extends Component {
  state = {
    handle: '',
    enteredName: '',
    msg: '',
  };

  componentDidMount() {
    this.props.checkHealth();
  }

  sendForm = e => {
    e.preventDefault();
    const { handle, msg } = this.state;

    this.props.sendMessage(handle, msg);
    this.setState({
      msg: '',
    });
  };

  acceptName = () => {
    this.setState({
      handle: this.state.enteredName,
    });
  };

  render() {
    const { enteredName, handle, msg } = this.state;

    if (handle === '') {
      return (
        <div className="container">
          <form
            onSubmit={() => {
              this.acceptName();
            }}
          >
            <div className="row">
              <input
                className="col s8"
                placeholder="Your Name"
                value={enteredName}
                onChange={e => {
                  this.setState({
                    enteredName: e.target.value,
                  });
                }}
              />
              <button className="btn">Register</button>
            </div>
          </form>
        </div>
      );
    }

    const { messages } = this.props;
    return (
      <ul className="pages">
        <li className="chat page">
          <div className="chatArea">
            <ul className="messages">
              {messages.map((data, i) => {
                return (
                  <li className="collection-item" key={i}>
                    {data.handle} -- {data.msg}
                  </li>
                );
              })}
            </ul>
          </div>
          <form onSubmit={this.sendForm}>
            <input
              value={msg}
              onChange={e => this.setState({ msg: e.target.value })}
              className="inputMessage"
              placeholder="Type here..."
            />
            <input type="submit" hidden />
          </form>
        </li>
        {/* <li className="login page">
          <div className="form">
            <h3 className="title">What's your nickname?</h3>
            <input className="usernameInput" type="text" maxlength="14" />
          </div>
        </li> */}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    health: state.health,
    messages: state.socket.messages,
  };
};

export default connect(
  mapStateToProps,
  { checkHealth, sendMessage }
)(Main);
