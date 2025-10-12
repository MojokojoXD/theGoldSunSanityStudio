import { defineType } from 'sanity';

export const TagType = defineType( {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  fields: [
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
    }
  ]
})