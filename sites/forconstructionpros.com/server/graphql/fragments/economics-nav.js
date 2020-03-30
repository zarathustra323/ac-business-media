const gql = require('graphql-tag');

module.exports = gql`
fragment EconomicsNavFragment on Content {
  id
  name
}
`;
