const { gql } = require('apollo-server')

const typeDefs = gql`

    enum PetType {
        CAT
        DOG
    }

    type User {
        id: ID!
        username: String!
        pets: [Pet]!
    }

    type Pet {
        id: ID!
        type: PetType!
        owner: User!
        img: String!
        createdAt: String
        name: String!
    }
    input NewPetInput {
        name: String!
        type: PetType!
    }
    input PetsInput {
        type: PetType
    }
    type Query {
        user: User!
        allPets(input: PetsInput): [Pet]!
        pet(id: ID!): Pet!
    }

    type Mutation {
        addPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs;