let actions = {
  userlist: function(users) {
    return {
      type: 'USER_LIST',
      users: users
    }
  },
  sendMessage: function(msg) {
    return {
      type: 'SEND_MESSAGE',
      msg: msg
    }
  }
}

export default actions