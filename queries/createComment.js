import gql from 'graphql-tag'

export const tokenAuth = gql`
  mutation createComment($content: String!, $project: Int!) {
    createComment(content: $content, project: $project) {
      content
    }
  }
`
