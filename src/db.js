const posts = [
  {
    id: '1',
    title: 'GraphQL 101',
    body: 'Learn more...',
    user: '1',
  },
  {
    id: '2',
    title: 'GraphQL 205',
    body: 'Ez graphql',
    user: '2',
  },
];

const users = [
  {
    id: '1',
    firstName: 'Jason',
    lastName: 'Heinowitz',
  },
  {
    id: '2',
    firstName: 'David',
    lastName: 'Zhang',
  },
];

const db = {
  posts,
  users,
};

export { db as default };
