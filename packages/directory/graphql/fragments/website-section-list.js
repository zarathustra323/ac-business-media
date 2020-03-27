const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteDirectorySectionListBlockFragment on WebsiteSection {
  id
  name
  fullName
  canonicalPath
}

`;
