import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const titleTemplate = "%s – Nickify";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/logo.png"
        alt="Nickify Logo"
        width={45}
        height={45}
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
};

export default config;
