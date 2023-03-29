import {defineField, defineType} from 'sanity'
import {GiHeartburn as icon} from "react-icons/gi"

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'post_category',
      title: 'Category',
      type: 'array',
      validation: (rule)  => rule.max(1).error('You can only have 1 Category'),   
      of: [{type: 'categories'}],
    }),
    defineField({
      name: 'overview',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Image',
      type: 'image',
      validation: (rule)  => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
      media: 'poster',
    },
    prepare(selection) {

      return {
        title: selection.title,
        date: selection.date,
        subtitle: selection.date,
        media: selection.media,
      }
    },
  },
})
