export default {
  name: "spectacle",
  type: "document",
  title: "Spectacles",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Cliquez sur 'Generate' pour créer automatiquement le slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "vimeoVideo",
      title: "Vidéo Vimeo",
      description:
        "Indiquer l'URL de la vidéo (ex: https://vimeo.com/63651329)",
      type: "string",
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
    prepare({ title = "Sans titre", slug = {}, media }) {
      return {
        title,
        media,
        subtitle: `/product/${slug.current}/`,
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
