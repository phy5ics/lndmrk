/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const createImages = /* GraphQL */ `
  mutation CreateImages(
    $input: CreateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    createImages(input: $input, condition: $condition) {
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
export const updateImages = /* GraphQL */ `
  mutation UpdateImages(
    $input: UpdateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    updateImages(input: $input, condition: $condition) {
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
export const deleteImages = /* GraphQL */ `
  mutation DeleteImages(
    $input: DeleteImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    deleteImages(input: $input, condition: $condition) {
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
export const createLandmarks = /* GraphQL */ `
  mutation CreateLandmarks(
    $input: CreateLandmarksInput!
    $condition: ModelLandmarksConditionInput
  ) {
    createLandmarks(input: $input, condition: $condition) {
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
export const updateLandmarks = /* GraphQL */ `
  mutation UpdateLandmarks(
    $input: UpdateLandmarksInput!
    $condition: ModelLandmarksConditionInput
  ) {
    updateLandmarks(input: $input, condition: $condition) {
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
export const deleteLandmarks = /* GraphQL */ `
  mutation DeleteLandmarks(
    $input: DeleteLandmarksInput!
    $condition: ModelLandmarksConditionInput
  ) {
    deleteLandmarks(input: $input, condition: $condition) {
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
