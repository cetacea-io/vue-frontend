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
    getDay (date) {
      moment.locale('es')
      let parsedDate = moment(date)
      return parsedDate.format('D')
    },
    getMonth (date) {
      moment.locale('es')
      let parsedDate = moment(date)
      return parsedDate.format('MMM')
    },
    abbrNum(number, decPlaces) {
      // 2 decimal places => 100, 3 => 1000, etc
      decPlaces = Math.pow(10,decPlaces);
  
      // Enumerate number abbreviations
      var abbrev = [ "k", "m", "b", "t" ];
  
      // Go through the array backwards, so we do the largest first
      for (var i=abbrev.length-1; i>=0; i--) {
  
        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
              // Here, we multiply by decPlaces, round, and then divide by decPlaces.
              // This gives us nice rounding to a particular decimal place.
              number = Math.round(number*decPlaces/size)/decPlaces;

              // Handle special case where we round up to the next abbreviation
              if((number == 1000) && (i < abbrev.length - 1)) {
                  number = 1;
                  i++;
              }

              // Add the letter for the abbreviation
              number += abbrev[i];

              // We are done... stop
              break;
        }
    }

    return number;
  }
    /**
     * Returns date formatted like 'May 9, 2017'
     * @param {String} date
     * @return {String} formatted date
     */
    // longTimestamp (date) {
    //   moment.locale('es');
    //   return moment(date).format('MMM D, YYYY')
    // },
  }
})
