import React, { Component } from 'react'
import axios from 'axios'
import Immutable from 'immutable'
import UserInputBox from './UserInputBox'
import UserMessageRows from './UserMessageRows'

class UserMessages extends Component {

	render() {
    let chatBoxStyle = {
      marginTop: "4%",
      width : "70%",
      marginLeft : "30%",
      position : "absolute",
      float: "left",
      height: "80%",
      overflowY: "hidden"
    }

		return (
      <div className="user-chat-box" style={chatBoxStyle}>
        <UserMessageRows messages={this.props.messages} user={this.props.user} />
        <UserInputBox actions={this.props.actions} />
      </div>
    )
	}

}

export default UserMessages
