import {defineField, defineType} from 'sanity'
import {GiDaggerRose as icon} from "react-icons/gi"

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'overview',
        title: 'Description',
        type: 'blockContent',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    }
  }
})