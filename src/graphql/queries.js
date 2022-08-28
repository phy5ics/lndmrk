/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchLandmarks = /* GraphQL */ `
  query SearchLandmarks(
    $filter: SearchableLandmarksFilterInput
    $sort: [SearchableLandmarksSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLandmarksAggregationInput]
  ) {
    searchLandmarks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        markerHeading
        markerText
        designator
        locationText
        city
        coordinates {
          lat
          lon
        }
        published
        Images {
          nextToken
        }
        Comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        added_on
        landmarksID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImages = /* GraphQL */ `
  query GetImages($id: ID!) {
    getImages(id: $id) {
      id
      landmarksID
      published
      image_url
      added_on
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        landmarksID
        published
        image_url
        added_on
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLandmarks = /* GraphQL */ `
  query GetLandmarks($id: ID!) {
    getLandmarks(id: $id) {
      id
      markerHeading
      markerText
      designator
      locationText
      city
      coordinates {
        lat
        lon
      }
      published
      Images {
        items {
          id
          landmarksID
          published
          image_url
          added_on
          createdAt
          updatedAt
        }
        nextToken
      }
      Comments {
        items {
          id
          comment
          added_on
          landmarksID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLandmarks = /* GraphQL */ `
  query ListLandmarks(
    $filter: ModelLandmarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLandmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        markerHeading
        markerText
        designator
        locationText
        city
        coordinates {
          lat
          lon
        }
        published
        Images {
          nextToken
        }
        Comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
