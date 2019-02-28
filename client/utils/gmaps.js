const CALLBACK_NAME = 'gmapsCallback'
// let initialized = !!window.google
let resolveInitPromise
let rejectInitPromise

// The promise handles the initialization
// status of the google maps script
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve
  rejectInitPromise = reject
})

export default function init() {
  let initialized = !!window.google
  // If google maps already is initialized
  // the initPromise should get resolved
  // eventually
  if (initialized) return initPromise

  initialized = true
  //The callback function is called by
  // the Google maps script if it is
  // successfully loaded
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google)

  // We inject a new script tag into
  // the <head> of our html to load
  // the google maps script
  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&callback=${CALLBACK_NAME}`
  script.onerror = rejectInitPromise
  document.querySelector('head').appendChild(script)

  return initPromise
}