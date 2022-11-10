export default {
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array', //array of res reference type of res.js
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
      title: 'Dishes',
      validation: (Rule) => Rule.required(),
    },
  ],
};
