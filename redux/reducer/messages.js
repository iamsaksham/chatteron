import Immutable from 'immutable'

export default function list(state = [], action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      let mid = 'm'+ new Date().getTime();
      let message = {
        login: "iamsaksham",
        mid: mid,
        uid: 11,
        avatar_url: "https://avatars1.githubusercontent.com/u/13564312?v=3",
        message: action.msg
      }
      return state.set(mid, Immutable.fromJS(message))
    default:
      return state;
  }
}