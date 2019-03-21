import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

let cookieStorage = {
  getItem: function(key) {
    return process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key]
  },
  setItem: function(key, value) {
    return Cookies.set(key, value, {expires: 365, secure: !isDev})
  },
  removeItem: function(key) {
    return Cookies.remove(key)
  }
}

export default ({store, req, isDev, isHMR}) => {
  createPersistedState({
    key: 'yourkey',
    paths: ['authentication', 'user'],
    // storage: {
    //   getItem: (key) => process.client ? Cookies.get(key) : cookie.parse(req.headers.cookie || '')[key],
    //   setItem: (key, value) => Cookies.set(key, value, {expires: 365, secure: !isDev}),
    //   removeItem: (key) => Cookies.remove(key)
    // }
  })(store)
}
