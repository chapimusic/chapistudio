export default {
  name: "siteSettings",
  type: "document",
  title: "Paramètres",
  __experimental_actions: [
    //'create',
    "update",
    //'delete',
    "publish",
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
    {
      name: "mail",
      type: "string",
      title: "Mail",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your website for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "instagram",
      type: "string",
      title: "Instagram",
      description: "username",
    },
    {
      name: "facebook",
      type: "string",
      title: "Facebook",
      description: "username",
    },
    {
      name: "youtube",
      type: "string",
      title: "YouTube",
      description: "username",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter",
      description: "username",
    },
    {
      name: "spotify",
      type: "string",
      title: "Spotify",
      description: "username",
    },
  ],
};
