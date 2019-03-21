// import isLogged from '~/utils/isLogged'

export default function ({next}) {
  // console.log(isLogged())
  // if (!hasToken) {
  //   return next({name: 'index'})
  // } else {
  //   next()
  // }
  // console.log('mejor fuera que adentro')
  next('/')
}