import { MdStar } from 'react-icons/md';

export default {
  name: 'related',
  title: 'Related',
  type: 'document',
  icon: MdStar,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'blogs',
      title: 'Related Blogs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
};
