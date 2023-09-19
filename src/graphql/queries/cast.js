module.exports = {
  generateQuery: () => `
    query ($eid: String!) {
      data: cast(eid: $eid) {
        id
        createdAt
        updatedAt
        archivedAt
        versionNumber
        versionId
        latestDraftVersionNumber
        publishedNumber
        publishedAt
        hasUnpublishedChanges
        hasBeenPublished
        eid
        type
        name
        title
        isTemplate
        exampleData
        allowedAliasIds
        fieldInfo
        config
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
