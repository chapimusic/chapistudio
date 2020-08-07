export default {
    name: 'concert',
    type: 'document',
    title: 'Agenda',
    __experimental_actions: [
        //'create',
        'update',
        //'delete',
        'publish'
    ],
    fields: [
        {
            name: 'upcomingConcerts',
            title: 'Dates à venir',
            type: 'portableText'
        },
        {
            name: 'pastConcerts',
            title: 'Dates passées',
            type: 'portableText'
        },
    ]
}
