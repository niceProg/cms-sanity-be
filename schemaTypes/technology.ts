export default {
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
      validation: (Rule: {
        custom: (arg0: (overview: any) => string | true) => {
          (): any
          new (): any
          warning: {(): any; new (): any}
        }
      }) =>
        Rule.custom((overview) => {
          const wordCount = overview ? overview.split(' ').length : 0
          return (
            wordCount <= 100 ||
            `Overview should not exceed 200 words. Currently, you have ${wordCount} words.`
          )
        }).warning(), // Menambahkan warning untuk memunculkan pesan lebih menonjol
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
  ],
}
