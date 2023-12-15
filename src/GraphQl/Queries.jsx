import { gql } from "@apollo/client";

export const BANK_LIST = gql`
  query GetBanks {
    getBanks {
      code
      id
      name
    }
  }
`;
