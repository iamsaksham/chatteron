import React, { Component } from 'react'
import axios from 'axios'
import Immutable from 'immutable'

class UserMessages extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

	render() {
    let t = this;
    let listStyle = {
      marginTop: "4%",
      width : "70%",
      marginLeft : "30%",
      position : "absolute",
      float: "left",
      height: "80%",
      overflowY: "scroll"
    }
    let userRowStyle;
    let message_rows = [];
    // console.log(this.props.messages)
    if(t.props.messages) {
      t.props.messages.filter(function(message) {
        // if(user.get('login') && user.get('login').search(regex) > -1){
          // console.log(message)
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
        // }
      });
    }

		return (
      <div className="user-messages" style={listStyle}>{message_rows}</div>
    )
	}

}

export default UserMessages
