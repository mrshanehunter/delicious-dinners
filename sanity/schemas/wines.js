import { MdLocalBar as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'wines',
  // visible title
  title: 'Wines',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Wine Name',
      type: 'string',
      description: 'wine name',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this wine',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'price of the wine in cents',
      validation: (Rule) => Rule.min(2000),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tags' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
    },
    prepare: ({ title, media, ...tags }) => ({
      title,
      media,
      subtitle: Object.values(tags).join(', '),
    }),
  },
};
