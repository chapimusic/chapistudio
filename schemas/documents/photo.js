import {format, parseISO} from 'date-fns'

export default {
    name: 'photo',
    title: 'Photos',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'imageWithCaption',
                }
            ],
        },
        {
            name: 'publishedAt',
            title: 'Date de publication / réalisation',
            type: 'date'
        },
    ],
    preview: {
    select: {
      title: "title",
        media: 'images.0.asset'
    },
    prepare({ title = "Sans titre", media }) {
      return {
        title,
        media
      };
    },
  },
    orderings: [
        {
            title: 'Date de publication, nouveaux',
            name: 'publishedAtDesc',
            by: [{field: 'publishedAt', direction: 'desc'}]
        }
    ]
}
