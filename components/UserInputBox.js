import React, { Component } from 'react'
import Immutable from 'immutable'

class UserMessages extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      msg: ''
    }
  }

  handleKeyDown(e){
    if(e.which == 13) {
      e.preventDefault();
      this.handleClick();
    }
  }

  handleClick() {
    if(this.state.msg.length != 0 && this.state.msg.trim().length != 0) {
      this.props.actions.sendMessage(this.state.msg);
      this.setState({
      msg: ""
    })
    }
  }

  emitChange(e){
    this.setState({
      msg: e.target.value
    })
  }

	render() {
    let inputBoxStyle = {
      marginTop: "80%",
      width : "90%",
      position : "absolute",
      float: "left"
    }
		return (
      <textarea style={inputBoxStyle}
        className="user-textbox-input"
        onChange={this.emitChange.bind(this)}
        placeholder="Type and Send Message..."
        value={this.state.msg}
        onKeyDown={this.handleKeyDown.bind(this)} >
      </textarea>
    )
	}

}

export default UserMessages
