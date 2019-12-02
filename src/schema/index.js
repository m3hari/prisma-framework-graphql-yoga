import path from 'path'
import { importSchema } from 'graphql-import'

export const typeDefs = importSchema(path.join(__dirname, './main.graphql'))
