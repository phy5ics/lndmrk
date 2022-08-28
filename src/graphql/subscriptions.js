/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
      id
      comment
      added_on
      landmarksID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages {
    onCreateImages {
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
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages {
    onUpdateImages {
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
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages {
    onDeleteImages {
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
export const onCreateLandmarks = /* GraphQL */ `
  subscription OnCreateLandmarks {
    onCreateLandmarks {
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
export const onUpdateLandmarks = /* GraphQL */ `
  subscription OnUpdateLandmarks {
    onUpdateLandmarks {
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
export const onDeleteLandmarks = /* GraphQL */ `
  subscription OnDeleteLandmarks {
    onDeleteLandmarks {
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
