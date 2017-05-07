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
    let avatar;
    let message_rows = [];
    let avatarStyle = {
      float : "left",
      maxHeight: '30px',
      maxWidth: '30px',
      borderRadius: "50%"
    }
    if(t.props.messages) {
      t.props.messages.filter(function(message) {
        if(message.get('uid') === t.props.user.get('id')) { // self message
          userRowStyle = {
            cursor: "pointer",
            padding: "0 12px 10px 0",
            textAlign: "right",
            width: "100%"
          }
          avatar = null;
        } else {
          userRowStyle = {
            cursor: "pointer",
            padding: "0 0 17px 12px",
            textAlign: "left",
            width: "100%"
          }
          avatar = <img src={message.get('avatar_url')} className="user-avatar" style={avatarStyle}></img>
        }
        message_rows.push(
          <div key={message.get('mid')} className="message-wrapper" style={userRowStyle}>
            {avatar}
            <div className="message-rows" style={{marginLeft: "40px"}}>{message.get('message')}</div>
          </div>
        )
      });
    }

		return (
        <div className="user-messages" style={listStyle}>{message_rows}</div>
    )
	}

}

export default UserMessageRows
