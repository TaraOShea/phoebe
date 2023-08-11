import {defineField, defineType} from 'sanity'
import {GiHeartburn as icon} from "react-icons/gi"

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  options: {
   validation: false,
  },
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

      type: 'array',
      name: 'images',
      title: 'Images',
     of: [
       {
        type: 'image', name: 'image',
          options: {
           validation: false,
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
      category: 'post_category'
    },
    prepare(selection) {
      console.log('Selection:', selection);
      
      const categoryArray = selection.category;
      console.log('Category Array:', categoryArray);
      
      if (categoryArray && categoryArray.length > 0) {
        const categoryObject = categoryArray[0];
        console.log('Category Object:', categoryObject);
        console.log('Category Object:', categoryObject.name);
        console.log('Category Object:', categoryObject.title);
    
    
        const categoryList = categoryObject.category_list;
        console.log('Category List:', categoryList);
        console.log('Category List:', categoryList.title);
    
        const categoryTitle = categoryList ? categoryList.title : 'No Category';
    
        console.log('Title:', selection.title);
        console.log('Date:', selection.date);
        console.log('Category:', categoryTitle);
        console.log('Media:', selection.media);
    
        return {
          title: selection.title,
          date: selection.date,
          subtitle: selection.date,
          media: selection.media,
        };
      } else {
        console.log('No Category Found');
        
        console.log('Title:', selection.title);
        console.log('Date:', selection.date);
        console.log('Media:', selection.media);
    
        return {
          title: selection.title,
          date: selection.date,
          subtitle: selection.date,
          media: selection.media,
        };
      }
    }
  },
})
