import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Paramètres')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            // Add a visual divider (optional)
            S.divider(),

            S.listItem()
                .title('Concerts')
                .child(
                    S.document()
                        .schemaType('concert')
                        .documentId('concert')
                ),
            // List out the rest of the document types, but filter out the config type
            ...S.documentTypeListItems()
                .filter(listItem => !['siteSettings'].includes(listItem.getId()))
        ])