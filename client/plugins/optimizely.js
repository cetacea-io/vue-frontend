import Vue from 'vue'
var optimizely = require('@optimizely/optimizely-sdk')


const datafile = async () => {
  try {
    const res = await fetch(process.env.OPTIMIZELY_DATAFILE)
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export default async (context, inject) => {
  
    inject('optimizely',
      optimizely.createInstance({ datafile: await datafile() })
    )

}