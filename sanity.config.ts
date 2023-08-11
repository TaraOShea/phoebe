import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'
import { defaultDocumentNode } from './src/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Phoebe Live Preview',
  validation: false,
  projectId: 'fhc5x7nu',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
