import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Info', value: 'info'},
          {title: 'Warning', value: 'warning'},
          {title: 'Success', value: 'success'},
          {title: 'Error', value: 'error'},
        ],
      },
      initialValue: 'info',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional icon name (e.g., "info", "warning", "check")',
    }),
  ],
  preview: {
    select: {
      title: 'content',
      type: 'type',
    },
    prepare({title, type}) {
      return {
        title: title?.[0]?.children?.[0]?.text || 'Callout',
        subtitle: type ? `${type.charAt(0).toUpperCase() + type.slice(1)} callout` : 'Callout',
      }
    },
  },
}) 