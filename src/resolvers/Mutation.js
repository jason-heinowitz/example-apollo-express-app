import uuid from 'uuid/v4';

const Mutation = {
  createPost(parent, args, { db, pubsub }, info) {
    const { title, body, user } = args.data;

    const userExists = db.users.some((dbuser) => dbuser.id === user);
    if (!userExists) throw new Error(`User(${user}) does not exist.`);

    const newPost = {
      id: uuid(),
      title,
      body,
      user,
    };

    db.posts.push(newPost);
    pubsub.publish('posts', {
      posts: newPost,
    });
    return newPost;
  },
};

export { Mutation as default };
