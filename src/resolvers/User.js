const User = {
  posts(parent, args, { db }, info) {
    return db.posts.filter((post) => post.user === parent.id);
  },
};

export { User as default };
