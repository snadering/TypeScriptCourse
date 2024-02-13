const typeDefs = `#graphql
  type Query {
    hello: String
    users: [User]
    user(id: ID!): User
    persons: [Person]
    book(id: ID!): Book
    books: [Book]
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

  type Person {
    id: ID!
    name: String!
    age: Int!
    phone: String
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String!
    category: String!
    rating: Float
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

  const persons = [
    {
      id: '1',
      name: 'Snader Kiro',
      age: 21,
      },
      {
      id: '2',
      name: 'Jack Doe',
      age: 30,
      },
      {
      id: '3',
      name: 'Julius Smith',
      age: 35,
      phone: "12345678"
      },
  ];

  const books = [
    {
        id: '1',
        title: 'Love Island',
        author: 'Jackstyle',
        publishedDate: '02/11/23',
        category: 'Romance',
        rating: 5.5
    },
    {
        id: '2',
        title: 'Julius Alene I Verden',
        author: 'Snadefar',
        publishedDate: '06/05/19',
        category: 'Science Fiction',
        rating: 6.9
    },
    {
        id: '3',
        title: 'Plagijack',
        author: 'PlagiatJack',
        publishedDate: '06/01/23',
        category: 'Thriller',
        rating: 2.5
    }
  ]

type User = {
    id: string;
    name: string;
    email: string;
    age: number;
}; 

type Person = {
    id: string;
    name: string;
    age: number;
    phone: string;
}

type Book = {
    id: string;
    title: string;
    author: string;
    publishedDate: string;
    category: string;
    rating: number;
}

type Category = {
    id: string;
    
}

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      users: () => users,
      user: (_parent: undefined, args: { id: string }, _context: any, _info: any) => {
        return users.find((user) => user.id === args.id);
        },
      persons: () => persons,
      book: (_parent: never, args: { id: string}) => {
        return books.find((book) => {book.id === args.id})
      },
      books: () => books,
    
},
    Mutation: {
        createUser: (_parent:never, args:User, _context:never, _info:never) => {
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
export {typeDefs, resolvers };