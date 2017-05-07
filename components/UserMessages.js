import React, { Component } from 'react'
import axios from 'axios'
import Immutable from 'immutable'
import UserInputBox from './UserInputBox'

class UserMessages extends Component {

	render() {
    let t = this;
    let listStyle = {
      width : "100%",
      position : "absolute",
      float: "left",
      height: "90%",
      overflowY: "scroll"
    }
    let chatBoxStyle = {
      marginTop: "4%",
      width : "70%",
      marginLeft : "30%",
      position : "absolute",
      float: "left",
      height: "80%",
      overflowY: "hidden"
    }
    let userRowStyle;
    let message_rows = [];
    if(t.props.messages) {
      t.props.messages.filter(function(message) {
        if(message.get('uid') === t.props.user.get('id')) {
          userRowStyle = {
            cursor: "pointer",
            padding: "0 0 10px 12px",
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
      <div className="user-chat-box" style={chatBoxStyle}>
        <div className="user-messages" style={listStyle}>{message_rows}</div>
        <UserInputBox actions={this.props.actions} />
      </div>
    )
	}

}

export default UserMessages
