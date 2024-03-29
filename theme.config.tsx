import Image from "next/image";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const titleTemplate = "%s – Nickify";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/logo.png"
        alt="Nickify Logo"
        width={42}
        height={42}
        className="rounded-full"
      />
    </>
  ),
  project: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="#fff"
      >
        <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
      </svg>
    ),
    link: "/invite",
  },
  chat: {
    link: "/discord",
  },
  docsRepositoryBase:
    "https://github.com/StatisticalLabs/nickify-website/edit/main",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  footer: {
    text: <Footer />,
  },
  primaryHue: 0,
  useNextSeoProps: () => ({ titleTemplate }),
  head: () => {
    const { title } = useConfig();
    const description =
      "Add your YouTube subscriber count to your Discord nickname.";
    const domain = "nickify.vercel.app";
    const url = ("https://" + domain) as `https://${typeof domain}`;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={titleTemplate.replace("%s", title)} />
        <meta name="description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={titleTemplate.replace("%s", title)}
        />
        <meta name="twitter:site:domain" content={domain} />
        <meta name="twitter:url" content={url} />
        <meta
          property="twitter:image"
          content="https://nickify.vercel.app/og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image:url"
          content="https://nickify.vercel.app/og.jpg"
        />
        <meta name="theme-color" content="#fa0105" />
      </>
    );
  },
};

export default config;
