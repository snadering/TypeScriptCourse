const typeDefs = `
  type Query {
    hello: String
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`;

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@mail.com',
    age: 25,
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@mail.com',
    age: 30,
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'jonny@mail.com',
    age: 35,
  },
];

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: () => users,
    user: (_parent: undefined, args: { id: string }, _context: any, _info: any) => {
      return users.find((user) => user.id === args.id);
    },
  },
  Mutation: {
    createUser: (_parent: never, args: User, _context: never, _info: never) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        email: args.email,
        age: args.age,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

export { typeDefs, resolvers };
