export default {
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        {
            name: 'specialInfo',
            title: 'Special Info',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
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
            name: 'releaseDate',
            title: 'Release date',
            type: 'number',
        },
        {
            name: 'platforms',
            title: 'Platforms',
            type: 'array',
            of: [{ type: 'string' }], 
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'string',
        },
        {
            name: 'seasons',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'number',
                    type: 'number',
                  },
                  {
                    name: 'episodes',
                    type: 'array',
                    of: [
                      {
                        type: 'number',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        {
            name: 'coAuthors',
            title: 'CoAuthors',
            type: 'array',
            of: [{ type: 'string' }], 
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
                name: 'da',
                title: 'DA',
                type: 'string',
        },
        {
            name: 'studio',
            title: 'Studio',
            type: 'string',
        },
    ]
}