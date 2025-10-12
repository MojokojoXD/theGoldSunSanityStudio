import { defineType } from 'sanity';

export const CategoryType = defineType( {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Name of Category',
      type: 'string',
    }
  ]
})