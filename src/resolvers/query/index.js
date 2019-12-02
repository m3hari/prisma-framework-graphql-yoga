export default {
  posts: async (parent, args, { db }) => {
    const result = await db.posts.findMany({
      include: { author: true },
    })
    return result
  },
}
