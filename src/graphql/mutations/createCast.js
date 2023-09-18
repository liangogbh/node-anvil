module.exports = {
  generateMutation: () => `
    mutation CreateCast (
      $title: String,
      $file: Upload!,
      $isTemplate: Boolean,
      $detectFields: Boolean,
    ) {
      createCast (
        title: $title,
        file: $file,
        isTemplate: $isTemplate,
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
        createdAt
        updatedAt
        archivedAt
      }
    }
  `,
}
