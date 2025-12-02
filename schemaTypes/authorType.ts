import { defineType, defineField } from 'sanity';


export const AuthorType = defineType( {
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    defineField( {
      name: 'name',
      title: 'Author\'s name',
      type: 'string',
      validation: rules => rules.required(),
    } ),
    defineField( {
      name: 'profession',
      type: 'string',
      title: 'Author\'s title(optional)',
      initialValue: ''
    } ),
  ]
})