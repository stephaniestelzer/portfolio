import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Short Tagline',
      type: 'string',
      description: 'One-liner describing the project’s purpose or impact.'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'media',
      title: 'Gallery / Demo Media',
      type: 'array',
      of: [{ type: 'image' }, { type: 'file' }],
      description: 'Images or video demos (e.g., MP4, GIF)'
    }),
    defineField({
      name: 'role',
      title: 'My Role',
      type: 'string',
      description: 'e.g. Design, Engineering, Creative Direction'
    }),
    defineField({
      name: 'techStack',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Link',
      type: 'url'
    }),
    defineField({
      name: 'liveDemoUrl',
      title: 'Live Demo URL',
      type: 'url'
    }),
    defineField({
      name: 'date',
      title: 'Project Date',
      type: 'date'
    }),
    defineField({
      name: 'categories',
      title: 'Tags / Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed breakdown of the project: problem, process, decisions, outcome.'
    })
  ]
})
