export default {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  actualUser: state => state.user,
  funnelResponded: state => state.funnelResponded
}