import CARD_COURSES from '@/graphql/queries/courses/cardCourses.gql'
import CARD_PROJECTS from '@/graphql/queries/projects/cardProjects.gql'
import RECOMMEND_CATEGORIES from '@/graphql/queries/recommendCategories.gql'
import gql from 'graphql-tag'

export default {
  async fetchContent ({dispatch, state}, first, after) {
    let response
      try {
        response = await this.app.apolloProvider.defaultClient.query({
          query: gql`
            query items ($first: Int, $after: String){
              items (first: $first, after: $after){
                pageInfo{
                  startCursor
                }
                edges {
                  cursor
                  node {
                    title
                    description
                    content {
                      
                      ... on CourseType {
                        id: id
                        title: title
                        area
                        classification {
                          title
                        }
                        dateAndTime {
                          startDate
                        }
                        image: coverImage
                        likes: totalLikes
                        views: totalViews
                        tipo: __typename
                      }
                      ... on ProjectType {
                        id: id
                        title: title
                        category
                      #   classification {
                      #     title
                      #   }
                      #   categories {
                      #     title
                      #   }
                      #   dateAndTime {
                      #     startDate
                      #   }
                        image: coverImage
                        contributors: randomContributors
                        totalContributors: totalContributors
                      #   author {
                      #     title
                      #     profilePicture
                      #   }
                        likes: totalLikes
                        views: totalViews
                        tipo: __typename
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: {
            first: first,
            after: state.after
          },
          update: result => result.items,
          error(error) {
            resolve(error)
          }
        })
      } catch (e) {
        // Aqui va el error
      }
    return response
  },
  async loadContent ({commit, dispatch, state}, first, after) {
    
    let component = null

    try {

      let componentType = `ItemsCarrousel`

      let { data } = await dispatch('fetchContent', state.first, state.after)
      commit('set_after', data.items.pageInfo.startCursor)

      // console.log(data)

      let itemsCarrouselProperties = {
        title: data.items.edges[0].node.title,
        description: data.items.edges[0].node.description,
        items: data.items.edges[0].node.content,
      }

      component = {
        type: () => import(`../../components/${componentType}`),
        properties: itemsCarrouselProperties,
        events: null
      }
    } catch (e) {
      //error
    }
    return component
  },
}