import React, { Component } from 'react'
import axios from 'axios'
import Immutable from 'immutable'

class UserList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      searchKey: ''
    }
  }

  componentDidMount() {
    let t = this;
    axios.get('https://api.github.com/users').then(function (response) {
      t.props.actions.userlist(response)
    })
  }

  handleChange(e) {
    this.setState({
      searchKey : e.target.value
    })
  }

	render() {
    let t = this;
    let listStyle = {
      marginTop: "4%",
      width : "30%",
      position : "absolute",
      float: "left",
      height: "74%",
      overflowY: "scroll"
    }
    let userRowStyle = {
      width : "100%",
      cursor: "pointer",
      padding: "0 0 20px 12px"
    }
    let avatarStyle = {
      float : "left",
      maxHeight: '30px',
      maxWidth: '30px',
      borderRadius: "50%"
    }
    let searchBoxStyle = {
      float : "left",
      width : "30%",
    }
    let user_rows = [];
    let regex = new RegExp(this.state.searchKey, 'i');
    if(t.props.list.get('list')) {
      t.props.list.get('list').filter(function(user) {
        if(user.get('login').search(regex) > -1){
          user_rows.push(
            <div key={user.get('id')} className="user-row-element" style={userRowStyle}>
              <img src={user.get('avatar_url')} className="user-avatar" style={avatarStyle}></img>
              <div className="user-rows" style={{marginLeft: "40px"}}>{user.get('login')}</div>
            </div>
          )
        }
      });
    }

		return (
      <div className="user-list-box" >
        <input type="text" style={searchBoxStyle} className="search-box" placeholder="Search for a participant" onChange={this.handleChange.bind(this)}/>
        <div className="user-list" style={listStyle}>{user_rows}</div>
      </div>
    )
	}

}

export default UserList
