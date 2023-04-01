import {defineField, defineType} from 'sanity'
import {GiChecklist as icon} from "react-icons/gi"

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    })
  ],
  preview: {
    select: { title: 'name' },
  },
})
