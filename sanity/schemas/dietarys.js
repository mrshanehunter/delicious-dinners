import { FaClipboardCheck as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'dietarys',
  // visible title
  title: 'Dietarys',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Dietary Note',
      type: 'string',
      description: 'dietary note or requirement',
    },
  ],
};
