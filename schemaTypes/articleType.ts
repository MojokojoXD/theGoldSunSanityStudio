import {defineType, defineField} from 'sanity'

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
      type: 'reference',
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
    }),
    {
      name: 'issue',
      title: 'Issue',
      type: 'reference',
      weak: false,
      to: [
        {
          type: 'issue',
        },
      ],
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
          type: 'string',
        },
      ],
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
            defineField({
              type: 'image',
              name: 'attribution',
              title: 'Header image',
              fields: [
                defineField({
                  name: 'attribution',
                  title: 'Attribution',
                  type: 'string',
                }),
              ],
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
    defineField( {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: input =>
        {
          const normalizedString = input.toLowerCase().replace( /\s+/g, '-' );
          const timestamp =(Math.floor((Date.now() / 60000))).toString()

          return encodeURI( normalizedString + '-' + timestamp );
        }
      }
    })
    ,
    defineField({
      name: 'isArchived',
      type: 'boolean',
      title: 'Archive',
      description: 'Toggle this option to move article to the archive',
    }),
    defineField({
      name: 'isVisible',
      type: 'boolean',
      title: 'Visibility',
      initialValue: true,
      description:
        'Toggle this option to remove public access to article but not remove/delete it.',
    }),
  ],
})
