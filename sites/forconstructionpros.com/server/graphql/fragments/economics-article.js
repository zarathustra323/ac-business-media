const gql = require('graphql-tag');

module.exports = gql`
fragment EconomicsArticleFragment on Content {
  id
  name
  body
}
`;
