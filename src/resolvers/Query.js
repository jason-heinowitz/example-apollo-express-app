const Query = {
  posts(parent, args, { db }, info) {
    return db.posts;
  },
  post(parent, { id }, { db }, info) {
    return db.posts.find((post) => post.id === id);
  },
  users(parent, args, { db }, info) {
    return db.users;
  },
  date(parent, args, ctx, info) {
    return '2010-06-09T15:21:13-4:00';
  },
};

export { Query as default };
