import {defineField, defineType} from 'sanity'
import { getExtension } from '@sanity/asset-utils'
import {GiDaggerRose as icon} from "react-icons/gi"

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: icon,
  fields: [
    defineField({
      title: 'Background Type',
      name: 'bgType',
      type: 'string',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: (rule)  => rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        hidden: ({ parent }) => {
          return parent.bgType !== 'photo'
        }
      }),
      defineField({
        name: 'video',
        title: 'Video',
        type: 'file',
        hidden: ({ parent }) => {
          return parent.bgType !== 'video'
        }
      }),
  ],
  preview: {
    select: {
      content: 'content.0.children'
    },
    prepare({ content }) {
      return {
        title: 'Hero',
    }
    }
  }
})