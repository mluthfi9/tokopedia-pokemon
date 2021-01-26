import gql from 'graphql-tag';

export const GET_POKEMON = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats{
          base_stat
      }
      forms{
        name
      }
      species{
        name
      }
      message
      status
      order
      height
      weight
    }
  }`;
