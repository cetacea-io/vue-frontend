import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import schema from './schema.json' 
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})


export default ({req, app}) => {
    return {
      httpEndpoint: process.env.DEV_GRAPH,
      cache: new InMemoryCache({ fragmentMatcher }),
    }
}