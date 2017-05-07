import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserList from './UserList'
import UserMessages from './UserMessages'

class App extends Component {

  render() {
    let logoStyle = {
      maxHeight: '50px',
      maxWidth: '100px'
    }
    return (
      <div className="app">
        <img src={"http://vignette4.wikia.nocookie.net/logopedia/images/b/b0/SJ_logo_90s.svg/revision/latest?cb=20100623155619"} className="app-logo" style={logoStyle}></img>
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
