import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Immutable from 'immutable'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// provider connects store to actual components

// Default static data
const initialState = {
    user: Immutable.fromJS({
      login: "iamsaksham",
      id: 13564312,
      avatar_url: "https://avatars1.githubusercontent.com/u/13564312?v=3",
      gravatar_id: "",
      url: "https://api.github.com/users/iamsaksham",
      html_url: "https://github.com/iamsaksham",
      type: "User",
      site_admin: false,
      name: "Saksham Jain",
      company: "@iflylabs ",
      blog: "https://iflychat.com/",
      location: "New Delhi, India",
      bio: "Software Developer at @iflylabs \r\nOpen source contributor",
    }),
    messages: Immutable.OrderedMap({
      m1: Immutable.fromJS({
        login: "wycats",
        mid: "m1",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Hi, its wycats, how can I help you?"
      }),
      m2: Immutable.fromJS({
        login: "iamsaksham",
        mid: "m2",
        uid: 13564312,
        avatar_url: "https://avatars1.githubusercontent.com/u/13564312?v=3",
        message: "I wanna talk to admin not to bots!!"
      }),
      m3: Immutable.fromJS({
        login: "wycats",
        mid: "m3",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Please wait, admins will be available soon"
      }),
      m4: Immutable.fromJS({
        login: "wycats",
        mid: "m4",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Please raise a ticket for the time being"
      }),
      m5: Immutable.fromJS({
        login: "wycats",
        mid: "m5",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Did you raise a ticket yet?????"
      }),
      m6: Immutable.fromJS({
        login: "iamsaksham",
        mid: "m6",
        uid: 13564312,
        avatar_url: "https://avatars1.githubusercontent.com/u/13564312?v=3",
        message: "Yes, I did that"
      }),
      m7: Immutable.fromJS({
        login: "wycats",
        mid: "m7",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Thankyou for raising the ticket"
      }),
      m8: Immutable.fromJS({
        login: "wycats",
        mid: "m8",
        uid: 4,
        avatar_url: "https://avatars3.githubusercontent.com/u/4?v=3",
        message: "Do you want to chat with me?"
      }),
      m9: Immutable.fromJS({
        login: "iamsaksham",
        mid: "m9",
        uid: 13564312,
        avatar_url: "https://avatars1.githubusercontent.com/u/13564312?v=3",
        message: "Ok, lets do it"
      }),
    }),
    list: Immutable.Map({})
  };

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
