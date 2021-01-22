import { MdRestaurantMenu as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'meals',
  // visible title
  title: 'Meals',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Meal Name',
      type: 'string',
      description: 'meal description',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this meal',
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
      description: 'price of the meal in cents',
      validation: (Rule) => Rule.min(2000),
    },
    {
      name: 'dietarys',
      title: 'Dietarys',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dietarys' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      dietary0: 'dietarys.0.name',
      dietary1: 'dietarys.1.name',
      dietary2: 'dietarys.2.name',
      dietary3: 'dietarys.3.name',
    },
    prepare: ({ title, media, ...dietarys }) => ({
      title,
      media,
      subtitle: Object.values(dietarys).join(', '),
    }),
  },
};
