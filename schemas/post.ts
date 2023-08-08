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
    // defineField({
    //   name: 'overview',
    //   title: 'Description',
    //   type: 'blockContent',
    // }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
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
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      name: 'images',
      title: 'Images',
     type:'array',
     of: [
       {
        type: 'image', name: 'image',
          options: {
           hotspot: true,
          },
       }
     ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishDate',
      media: 'poster',
      category: 'post_category.0.title',
    },
    prepare(selection) {
      console.log('Selection:', selection); // Log the entire selection object
      
      console.log('Title:', selection.title); // Log the title
      console.log('Date:', selection.date); // Log the date
      console.log('Category:', selection.category); // Log the category
      console.log('Media:', selection.media); // Log the media
      
      const categories = selection.post_category.map(category => {
        console.log('Category Object:', category); // Log the entire category object
        console.log('Category Title:', category.title); // Log the category title
        return category.title;
      }).join(', ');
      console.log('Categories:', categories); // Log the joined category titles
      
      return {
        title: selection.title,
        date: selection.date,
        subtitle: categories,
        media: selection.media,
      };
    },
  },
})
