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
      if(this.$store.getters['authentication/isAuthenticated']){
        originalMethod.apply(context, args);
      } else {
        this.$loginModal.show()
      }
    };

    return descriptor;
  
  }
  
};