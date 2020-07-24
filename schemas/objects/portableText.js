export default {
    title: 'Portable Text',
    name: 'portableText',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            marks: {
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'External link',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL'
                            },
                            {
                                title: 'Ouvrir dans une nouvelle fenêtre',
                                name: 'blank',
                                type: 'boolean'
                            }
                        ]
                    },
                    {
                        name: 'internalLink',
                        type: 'object',
                        title: 'Internal link',
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                title: 'Reference',
                                to: [
                                    {type: 'product'},
                                    // other types you may want to link to
                                ]
                            }
                        ]
                    }
                ]
                // Styles let you set what your user can mark up blocks with. These
                // corrensponds with HTML tags, but you can set any title or value
                // you want and decide how you want to deal with it where you want to
                // use your content.
                /*
                styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H1', value: 'h1'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'Quote', value: 'blockquote'}
                ],
                lists: [{title: 'Bullet', value: 'bullet'}],
                // Marks let you mark up inline text in the block editor.
                marks: {
                    // Decorators usually describe a single property – e.g. a typographic
                    // preference or highlighting by editors.
                    decorators: [
                        {title: 'Strong', value: 'strong'},
                        {title: 'Emphasis', value: 'em'}
                    ],
                    // Annotations can be any object structure – e.g. a link or a footnote.
                }
                */
            }
        }
    ]
}
