import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'

class UserMessageRows extends Component {

  componentDidUpdate() {
    // To scroll div to bottom everytime a new message is sent
    var domNode = ReactDOM.findDOMNode(this);
    domNode.scrollTop = domNode.scrollHeight;
  }

	render() {
    let t = this;
    let listStyle = {
      width : "100%",
      position : "absolute",
      float: "left",
      height: "90%",
      overflowY: "scroll"
    }
    let userRowStyle;
    let message_rows = [];
    if(t.props.messages) {
      t.props.messages.filter(function(message) {
        if(message.get('uid') === t.props.user.get('id')) {
          userRowStyle = {
            cursor: "pointer",
            padding: "0 12px 10px 0",
            textAlign: "right",
            width: "100%"
          }
        } else {
          userRowStyle = {
            cursor: "pointer",
            padding: "0 0 10px 12px",
            textAlign: "left",
            width: "100%"
          }
        }
        message_rows.push(
          <div key={message.get('mid')} className="message-rows" style={userRowStyle}>{message.get('message')}</div>
        )
      });
    }

		return (
        <div className="user-messages" style={listStyle}>{message_rows}</div>
    )
	}

}

export default UserMessageRows
