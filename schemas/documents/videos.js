export default {
  name: "videos",
  type: "document",
  title: "Vidéos",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
        name: 'video',
        title: 'Vidéo YouTube',
        type: 'video',
    },
    {
      name: "body",
      title: "Contenu",
      type: "portableText",
    },
    {
      name: "publishedAt",
      title: "Date de publication / réalisation",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare({ title = "Sans titre" }) {
      return {
        title,
      };
    },
  },
  orderings: [
    {
      title: "Ordre",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
