import { format, parseISO } from "date-fns";

export default {
  name: "release",
  title: "Albums",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de l'album",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "body",
      title: "Contenu",
      type: "portableText",
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
      name: "bandcampId",
      title: "ID Bandcamp",
      description:
        "clicking the share / embed link under the album art, and examining the WordPress embed code.",
      type: "number",
    },
    {
      name: "publishedAt",
      title: "Date de publication / réalisation",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "images.0.asset",
    },
    prepare({
      title = "Sans titre",
      publishedAt = format(new Date()),
      slug = {},
      media,
    }) {
      const dateSegment = format(parseISO(publishedAt), "yyyy/MM");
      return {
        title,
        media,
        subtitle: publishedAt
          ? `/${slug.current}/ - ${dateSegment}`
          : "Date de publication / réalisation manquant",
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
