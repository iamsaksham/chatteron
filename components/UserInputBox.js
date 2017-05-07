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
      marginTop: "51%",
      width : "90%",
      position : "absolute",
      float: "left"
    }
    let buttonStyle = {
      marginTop: "51%",
      marginLeft: "90%",
      width : "10%",
      height : "8%",
      position : "absolute"
    }
		return (
      <div className="footer">
        <textarea style={inputBoxStyle}
          className="user-textbox-input"
          onChange={this.emitChange.bind(this)}
          placeholder="Type and Send Message..."
          value={this.state.msg}
          onKeyDown={this.handleKeyDown.bind(this)} >
        </textarea>
        <button onClick={this.handleClick.bind(this)} style={buttonStyle}>Send</button>
      </div>
    )
	}

}

export default UserMessages
