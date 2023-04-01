import blockContent from './modules/blockContent'
import hero from './modules/hero'
import category from './category'

import categories from './categories'
import post from './post'
import page from './page'


export const schemaTypes = [
  // Document types
  categories,
  post,
  page,

  // Other types
  blockContent,
  category,
  hero
]
