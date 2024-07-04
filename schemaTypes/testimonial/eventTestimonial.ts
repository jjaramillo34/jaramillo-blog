import {defineField, defineType} from 'sanity'

export const eventTestimonial = defineType({
  name: 'eventTestimonial',
  title: 'Event Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
