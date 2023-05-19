import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  redirects: async () => [
    {
      source: "/discord",
      destination: "https://discord.gg/MEF8q6MwTc",
      permanent: false,
    },
    {
      source: "/invite",
      destination:
        "https://discord.com/api/oauth2/authorize?client_id=1055073180970127370&permissions=134236160&scope=bot%20applications.commands",
      permanent: false,
    },
  ],
});
