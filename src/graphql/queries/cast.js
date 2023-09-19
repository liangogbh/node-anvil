module.exports = {
  generateQuery: () => `
    query ($eid: String!) {
      data: cast(eid: $eid) {
        id
        eid
        type
        name
        title
        config
        location
        createdAt
        updatedAt
        versionNumber
        organization {
          id
          eid
          name
          slug
          subscribedPlanFeatures
        }
      }
    }
  `,
}
