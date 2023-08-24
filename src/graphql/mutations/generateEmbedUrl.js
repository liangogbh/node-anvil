module.exports = {
  generateMutation: () => `
    mutation GenerateEmbedURL (
      $type: String!,
      $eid: String!,
      $validUntil: String,
      $validForSeconds: Int,
      $options: JSON,
      $metadata: JSON,
    ) {
      generateEmbedURL (
        type: $type,
        eid: $eid,
        validUntil: $validUntil,
        validForSeconds: $validForSeconds,
        options: $options,
        metadata: $metadata,
      ) {
        requestTokenEid
        url
      }
    }
  `,
}
