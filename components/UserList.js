import React, { Component } from 'react'
import axios from 'axios'
import Immutable from 'immutable'

class UserList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  componentDidMount() {
    let t = this;
    axios.get('https://api.github.com/users').then(function (response) {
      t.props.actions.userlist(response)
    })
  }

	render() {
    let t = this;
    let listStyle = {
      marginTop: "4%",
      width : "30%",
      position : "absolute",
      float: "left",
      height: "80%",
      overflowY: "scroll"

    }
    let userRowStyle = {
      width : "30%",
      cursor: "pointer",
      padding: "0 0 20px 12px"
    }
    let user_rows = [];
    // console.log(this.props.list.get('list'))
    if(t.props.list.get('list')) {
      t.props.list.get('list').filter(function(user) {
        // if(user.get('login') && user.get('login').search(regex) > -1){
          user_rows.push(
            <div key={user.get('id')} className="user-rows" style={userRowStyle}>{user.get('login')}</div>
          )
        // }
      });
    }

		return (
      <div className="user-list" style={listStyle}>{user_rows}</div>
    )
	}

}

export default UserList
