import Immutable from 'immutable'

export default function list(state = [], action) {
  switch (action.type) {
    case 'USER_LIST':
      // console.log(action.users.data)
      return state.set("list", Immutable.fromJS(action.users.data))
    default:
      return state;
  }
}