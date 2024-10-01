import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    // Tambahkan dukungan untuk blok kode dengan berbagai bahasa
    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        language: 'javascript', // Default language, bisa diubah
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'PHP', value: 'php'},
          {title: 'Python', value: 'python'},
          {title: 'Golang', value: 'go'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'C++', value: 'cpp'},
        ],
        withFilename: true, // Menampilkan nama file opsional
      },
    }),
  ],
})
