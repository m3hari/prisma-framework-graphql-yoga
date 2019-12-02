import { GraphQLServer } from 'graphql-yoga'
import { Photon } from '@prisma/photon'
import { typeDefs } from './schema'
import resolvers from './resolvers'

const { PORT, NODE_ENV } = process.env

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    db: new Photon(),
  },
})

server.start({ port: PORT }, () => {
  console.log(
    `🚀 GraphQL Server is running on http://localhost:${PORT} in "${NODE_ENV}" mode\n`,
  )
})
