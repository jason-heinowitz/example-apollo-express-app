const Subscription = {
  posts: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('posts');
    },
  },
};

export { Subscription as default };
