import {defineType, defineField} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'delayAnimation',
      title: 'Delay Animation',
      type: 'string',
    }),
    // slug field
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'modalDetails',
      title: 'Modal Details',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({
              name: 'project',
              title: 'Project',
              type: 'string',
            }),
            defineField({
              name: 'client',
              title: 'Client',
              type: 'string',
            }),
            defineField({
              name: 'language',
              title: 'Language',
              type: 'string',
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {
                dateFormat: 'DD-MM-YYYY',
              },
            }),
            defineField({
              name: 'preview',
              title: 'Preview URL',
              type: 'url',
            }),
            defineField({
              name: 'link',
              title: 'Course Link',
              type: 'url',
            }),
            defineField({
              name: 'techStack',
              title: 'Tech Stack Badge',
              type: 'url',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
})
