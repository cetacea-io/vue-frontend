import cookie from 'cookie'
import * as Cookies from 'js-cookie'

export default () => ({
  token: process.client ? Cookies.get('apollo-token') : null,
  status: '',
  funnelResponded: false,
  isAuthenticated: false,
})