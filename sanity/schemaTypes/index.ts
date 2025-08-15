import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import { blockContent } from './blockContent'
import callout from './callout'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContent, callout],
}
