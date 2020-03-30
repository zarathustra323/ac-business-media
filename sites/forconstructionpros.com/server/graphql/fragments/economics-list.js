const gql = require('graphql-tag');

module.exports = gql`
fragment EconomicsListFragment on Content {
  id
  name
  body
}
`;
