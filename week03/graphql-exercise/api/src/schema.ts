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
    createPerson(name: String!, age: Int!, imageUrl: String, addressInput: AddressInput!): Person
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
    imageUrl: String
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
        createPerson: (
            _parent: never,
            { name, age, imageUrl, addressInput }: { name: string; age: number; imageUrl: string; addressInput: AddressInput }
        ) => {
            const newPerson: Person = {
                id: String(people.length + 1),
                name,
                age,
                imageUrl,
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
    }))
}

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
]

const people = [
    {
        id: '1',
        name: 'Sander',
        age: 21,
        imageUrl: 'person1.png',
        address: Addresses[0]
    },
    {
        id: '2',
        name: 'Jack',
        age: 15,
        imageUrl: 'person2.png',
        address: Addresses[1]
    },
    {
        id: '3',
        name: 'Julius',
        age: 12,
        imageUrl: 'person3.png',
        address: Addresses[2]
    },
    
]

type Address = {
    id: string;
    zipCode: number;
    street: string;
    houseNumber: number;
}

type Person = {
    id: string;
    name: string;
    age: number;
    imageUrl: string;
    address: Address;
}


type AddressInput = {
    zipCode: number;
    street: string;
    houseNumber: number;
}



export { typeDefs, resolvers };