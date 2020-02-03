const gql = require('graphql-tag');

module.exports = gql`
fragment EquipmentMarketOutlookListFragment on Content {
  id
  name
  body
}
`;
