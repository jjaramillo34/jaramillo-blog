import {defineType, defineField} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'role',
      type: 'string',
    }),
  ],
})
