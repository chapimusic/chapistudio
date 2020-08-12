export default {
  name: "paypalButtons",
  type: "object",
  title: "IDs des boutons Paypal",
  fields: [
    {
      name: "france",
      type: "string",
      title: "France",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "world",
      type: "string",
      title: "World",
      validation: (Rule) => Rule.required(),
    },
  ],
};
