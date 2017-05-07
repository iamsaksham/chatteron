let actions = {
  userlist: function(users) {
    return {
      type: 'USER_LIST',
      users: users
    }
  }
}

export default actions