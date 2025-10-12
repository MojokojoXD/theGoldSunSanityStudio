import { defineType, defineField } from 'sanity';

export const ArticleType = defineType({
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'published_on',
      title: 'Date published',
      type: 'datetime',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    },
    {
      name: 'cover_img',
      title: 'Cover image',
      type: 'image',
      fields: [
        {
          name: 'attribution',
          title: 'Attribution',
          type: 'string'
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      name: 'summary',
      title: 'Summary/Abstract',
      type: 'string',
      description: 'A short description of the article',
      validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'content_block',
          type: 'block',
          of: [
            defineField( {
              type: 'image',
              name: 'attribution',
              title: 'Header image',
              fields: [
                defineField( {
                  name: 'attribution',
                  title: 'Attribution',
                  type: 'string'
                })
              ]
            })
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
})

