const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        spaceCats: [SpaceCat]
    }
    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions: [Mission]
    }
    type Mission {
        id: ID!
        name: String!
        description: String!
        completed: Boolean!
    }
`;

module.exports = typeDefs;