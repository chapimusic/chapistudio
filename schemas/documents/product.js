export default {
  name: "product",
  title: "Produits",
  type: "document",
  fields: [
    {
      name: "ref",
      title: "Référence",
      type: "string",
    },
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Description courte",
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
      name: "release",
      title: "Album lié",
      type: "reference",
      to: { type: "release" },
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
      name: "price",
      title: "Price",
      description: 'Prix en €. Mettre "0" pour produit épuisé.',
      type: "price",
    },
    {
      name: "paypalButtons",
      title: "IDs des boutons Paypal",
      type: "paypalButtons",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Contenu",
      type: "portableText",
    },
    {
      name: "publishedAt",
      title: "Date de sortie",
      type: "date",
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
      title: "Date de publication, nouveaux",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
