import gql from 'graphql-tag'

export const tokenAuth = gql`
    mutation tokenAuth($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`
