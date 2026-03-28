/** @type {import('next').NextConfig} */
import nextra from "nextra";
import withPWA from "next-pwa";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
});

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  importScripts: ['/manual-do-calouro/planktos/planktos.min.js']
});

const config = withNextra({
  ...pwaConfig,
  output: "export",
  distDir: "docs",
  basePath: "/manual-do-calouro",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  compress: true,
  /* Não da pra usar junto com output export
    i18n: {
      locales: ['en', 'pt'],
      defaultLocale: 'pt'
    }*/
});

export default config;