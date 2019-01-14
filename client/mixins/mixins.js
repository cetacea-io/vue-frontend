import Vue from 'vue'
import moment from 'moment'

Vue.mixin({
  methods: {
    /**
     * Returns formatted date depending on how old it is.
     * If older than 6 days, return formatted like '2 days ago',
     * otherwise return formatted like 'Aug 2'.
     * @param {String} date
     * @return {String} formatted date
     */
    shortTimestamp (date) {
      moment.locale('es');
      let article = moment(date)
      let today = moment(new Date())

      if (today.diff(article) > 518400000) {
        return article.format('MMM D')
      } else {
        return article.fromNow()
      }
    },
    /**
     * Returns date formatted like 'May 9, 2017'
     * @param {String} date
     * @return {String} formatted date
     */
    // longTimestamp (date) {
    //   moment.locale('es');
    //   return moment(date).format('MMM D, YYYY')
    // },
    log(logMessage) {
      // return decorator function
      return function(target, property, descriptor) {
        // save original value, which is method (function)
        let originalMethod = descriptor.value
        // replace method implementation
        descriptor.value = function(...args) {
          console.log('[LOG]', logMessage)
          // here, call original method
          // `this` points to the instance
          return originalMethod.call(this, ...args)
        }
        return descriptor
      }
    }
  }
})
