import type { CollectionConfig } from 'payload/types'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'authors',
      type: 'relationship',
      hasMany: true,
      relationTo: 'users'
    },
    {
      name: 'body',
      type: 'richText',
    }
  ],
}
