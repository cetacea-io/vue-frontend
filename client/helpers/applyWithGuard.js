export default function applyWithGuard(wrapped) {
  return function() {
    if (false){
      return wrapped.apply(this, arguments);
    } else {
      alert('User not logged')
    }
  }
}