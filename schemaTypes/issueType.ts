import {defineType, defineField} from 'sanity'

export const IssueType = defineType({
  name: 'issue',
  type: 'document',
  title: 'Article Issue',
  fields: [
    defineField({
      name: 'issueDate',
      type: 'date',
      title: 'Date',
      options: {
        dateFormat: 'MMMM-YYYY'
      },
      validation: rules => rules.required()
    } ),
    defineField( {
      name: 'articles',
      type: 'array',
      title: 'Article in issue',
      description: 'Use this field to add articles already created to this issue. At least one article is needed',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article', name: 'article' }
          ]
        }
      ],
      validation: rules => [rules.min(1), rules.unique()]
    })
  ],

})
