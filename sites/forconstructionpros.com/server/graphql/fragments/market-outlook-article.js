const gql = require('graphql-tag');

module.exports = gql`
fragment EquipmentMarketOutlookArticleFragment on Content {
  id
  name
  body
}
`;
