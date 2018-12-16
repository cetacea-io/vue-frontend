const BEFOREINSTALLPROMPT = 'beforeinstallprompt'
const DISMISSED = 'dismissed'

window.addEventListener(BEFOREINSTALLPROMPT, function(e) {
  // beforeinstallprompt event fired

  // e.userChoice will return a Promise
  // For more details read:  https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then( function (choiceResult) {
    console.log(choiceResult.outcome)

    if(choiceResult.outcome == DISMISSED) {
      // User cancelled the home screen install
      analytics.track('Cancelled home screen install', {
        user: 'Some user',
        project: 'Some project'
      })
    } else {
      // User added to home screen
      analytics.track('Add Home screen install', {
        user: 'Some user',
        project: 'Some project'
      })
    }
  })

})