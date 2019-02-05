const cookie = process.client ? require('js-cookie') : undefined 

export default () => ({
  token: process.client ? cookie.get('apollo-token') || null : null,
  status: '',
  user: null,
  funnelResponded: true
})