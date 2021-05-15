module.exports = {
    Query: {
        allPets(_, __, { models }) {
            return models.Pet.findMany()
        }
    },

    Mutation: {

    },
    Pet: {
        
    },
    User: {

    }
}