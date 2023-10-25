import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
//import {colorInput} from '@sanity/color-input'
//import { dashboardTool } from "@sanity/dashboard";
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Chapi Chapo',
  projectId: '510i3x4t',
  dataset: 'production',
  plugins: [
    deskTool(),
    //colorInput(),
  ],
  schema: {
    types: schemas,
  },
})