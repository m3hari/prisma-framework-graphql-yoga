export default {
  createPost: async (parent, { input }, { db }) => {
    const result = await db.posts.create({ data:input })
    return result
  },
}
