import { gql } from '@apollo/client';

export const GET_CHARACTERS_BY_IDS = gql`
  query getCharactersByIds($characterIds: [ID!]!) {
    charactersByIds(ids: $characterIds) {
      id
      name
      status
      species
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export const GET_NUMBER_OF_CHARACTER_PAGES = gql`
  query getNumberOfCharactersPages {
    characters {
      info {
        pages
      }
    }
  }
`;

export const GET_NUMBER_OF_CHARACTERS = gql`
  query getNumberOfCharactersPages {
    characters {
      info {
        count
      }
    }
  }
`;
