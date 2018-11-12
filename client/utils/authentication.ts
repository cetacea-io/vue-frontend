/**
 * Authentication helpers functions
*/


/**
 * loginRequired
 * decorator for every action in the website that
 * needs to be authenticated to complete the action
 * use it like this:
 * 
 * @loginRequired
 * methodDeclaration() {
 * 
 * }
 */
export function loginRequired() {

  return function(target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  
    var originalMethod = descriptor.value;
    descriptor.value = function() {
      var context = this;
      var args = arguments;
      if(this.$store.getters['auth/isAuthenticated']){
        alert('Estas logeado, ya le diste follow');
        originalMethod.apply(context, args);
      } else {
        alert('Debes registrarte para poder completar la accion');
      }
    };

    return descriptor;
  
  }
  
};