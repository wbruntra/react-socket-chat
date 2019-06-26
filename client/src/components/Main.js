import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkHealth, sendMessage } from '../actions';

class Main extends Component {
  state = {
    handle: '',
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

  render() {
    const { messages } = this.props;
    const { handle, msg } = this.state;
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.sendForm}>
            <input
              type="text"
              value={handle}
              onChange={e => {
                this.setState({ handle: e.target.value });
              }}
            />
            <input
              type="text"
              value={msg}
              onChange={e => {
                this.setState({
                  msg: e.target.value,
                });
              }}
            />
            <input className="btn" type="submit" />
          </form>
        </div>
        <div className="row">
          <ul className="collection">
            {messages.map((data, i) => {
              return (
                <li className="collection-item" key={i}>
                  {data.handle} -- {data.msg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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

export default connect(mapStateToProps, { checkHealth, sendMessage })(Main);
