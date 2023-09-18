module.exports = {
  generateMutation: () => `
    mutation CreateCast (
      $organizationEid: String,
      $title: String,
      $file: Upload!,
      $isTemplate: Boolean,
      $allowedAliasIds: [String],
      $detectFields: Boolean,
    ) {
      createCast (
        organizationEid: $organizationEid,
        title: $title,
        file: $file,
        isTemplate: $isTemplate,
        allowedAliasIds: $allowedAliasIds,
        detectFields: $detectFields,
      ) {
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
          ...OrganizationFragment
        }
        parentCast {
          ...CastFragment
        }
        createdAt
        updatedAt
        archivedAt
      }
    }
  `,
}
