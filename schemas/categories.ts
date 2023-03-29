import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categories',
  title: 'Category',
  type: 'object',
  fields: [
    defineField({
      name: 'category_list',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
  preview: {
    select: {
      title: 'category_list.name',
    },
  },
})
