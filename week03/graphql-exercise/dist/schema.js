const typeDefs = `#graphql
  type Query {
    hello: String
    people: [Person]
    addressesWithPeople: [AddressWithPeople]
  }

  input AddressInput {
    zipCode: Int!
    street: String!
    houseNumber: Int!
  }

  type Mutation {
    createPerson(name: String!, age: Int!, addressInput: AddressInput): Person
  }

  type Address {
    id: ID!
    zipCode: Int!
    street: String!
    houseNumber: Int!
  }

  type Person {
    id: ID!
    name: String!
    age: Int!
    address: Address!
  }

  type AddressWithPeople {
    address: Address!
    residents: [Person]!
  }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        people: () => people,
        addressesWithPeople: () => getAddressesWithPeople()
    },
    Mutation: {
        createPerson: (_parent, { name, age, addressInput }) => {
            const newPerson = {
                id: String(people.length + 1),
                name,
                age,
                address: {
                    id: String(Addresses.length + 1),
                    ...addressInput,
                },
            };
            people.push(newPerson);
            return newPerson;
        },
    },
};
const getAddressesWithPeople = () => {
    return Addresses.map((address) => ({
        address,
        residents: people.filter((person) => person.address.id === address.id),
    }));
};
const Addresses = [
    {
        id: '1',
        zipCode: 2620,
        street: "Albertslundvej",
        houseNumber: 45
    },
    {
        id: '2',
        zipCode: 2625,
        street: "Vallensbækvej",
        houseNumber: 125
    },
    {
        id: '3',
        zipCode: 4000,
        street: "Roskildevej",
        houseNumber: 5
    },
];
const people = [
    {
        id: '1',
        name: 'Sander',
        age: 21,
        address: Addresses[0]
    },
    {
        id: '2',
        name: 'Jack',
        age: 15,
        address: Addresses[1]
    },
    {
        id: '3',
        name: 'Julius',
        age: 12,
        address: Addresses[2]
    },
];
export { typeDefs, resolvers };
