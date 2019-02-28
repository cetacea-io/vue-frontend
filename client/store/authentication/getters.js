export default {
  isAuthenticated: state => state.isAuthenticated,
  authStatus: state => state.status,
  actualUser: state => state.user,
  funnelResponded: state => state.funnelResponded
}