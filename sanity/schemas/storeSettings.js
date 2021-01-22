import { MdStore as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'storeSettings',
  // visible title
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'description',
    },
    {
      name: 'chef',
      title: 'Chefs in the Kitchen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'chefs' }] }],
    },
    {
      name: 'specials',
      title: 'Daily Specials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'meals' }] }],
    },
  ],
};
