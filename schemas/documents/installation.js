export default {
  name: "installation",
  type: "document",
  title: "Installations",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "imageWithCaption",
        },
      ],
    },
    {
      name: "body",
      title: "Contenu",
      type: "portableText",
    },
    {
      name: "link",
      title: `Lien "pour plus d'infos"`,
      type: "string",
    },
    {
      name: "order",
      title: "Ordre",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      media: "images.0",
    },
    prepare({ title = "Sans titre", media }) {
      return {
        title,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Ordre",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
