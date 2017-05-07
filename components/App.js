import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserList from './UserList'
import UserMessages from './UserMessages'

class App extends Component {

  render() {
    return (
      <div className="app">
        <UserList actions={this.props.actions} list={this.props.list} />
        <UserMessages actions={this.props.actions} messages={this.props.messages} user={this.props.user} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch) //binds all the actions with dispatcher and returns them
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
