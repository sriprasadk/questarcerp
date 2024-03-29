// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuestArc ERP Suite',
  tagline: 'We bring the Cloud Native ERP to your Business.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  //url: 'https://sriprasadk.github.io/',
  url: 'https://qerpn-ext.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sriprasadk', // Usually your GitHub org/user name.
  projectName: 'questarcerpnext', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'QuestArc ERP',
        logo: {
          alt: 'QuestArc ERP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Product',
          },
          {to: '/blog', label: 'ERP Modules', position: 'left'},
          {to: '/blog', label: 'Services', position: 'left'},
          {to: '/blog', label: 'Pricing', position: 'left'},
     
          {to: '/blog', label: 'About Us', position: 'left'},

          
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Integrations',
            items: [
              {
                label: 'SalesForce',
                href: 'https://developer.salesforce.com/developer-centers/integration-apis',
              },              
              {
                label: 'Paypal',
                href: 'https://developer.paypal.com/api/rest/',
              },
              {
                label: 'Dropbox',
                href: 'https://www.dropbox.com/developers/documentation',
              },
              {
                label: 'MuleSoft',
                href: 'https://www.mulesoft.com/platform/api-management',
              },
            ],
          },
          {
            title: 'Cloud',
            items: [
              {
                label: 'Google',
                href: 'https://developers.google.com/apis-explorer',
              },
              {
                label: 'AWS',
                href: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html',
              },
              {
                label: 'Azure',
                href: 'https://azure.microsoft.com/en-us/products/api-management',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} QuestArc LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
