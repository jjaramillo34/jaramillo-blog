import {defineType, defineField} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },

  initialValue: {
    name: 'Javier Jaramillo',
  },

  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],

  defaultOrdering: {
    name: 'name',
    title: 'Name',
    by: [{field: 'name', direction: 'asc'}],
  },

  filter: {
    fieldsets: [
      {
        name: 'author',
        title: 'Author',
        options: {collapsible: true, collapsed: false},
      },
    ],
    fields: [
      {
        field: 'name',
        name: 'Name',
        type: 'string',
        fieldset: 'author',
      },
    ],
  },
})
