import { combineReducers } from 'redux'
import user from './user'
import list from './list'
import messages from './messages'

export default combineReducers({
  user,
  list,
  messages
});
