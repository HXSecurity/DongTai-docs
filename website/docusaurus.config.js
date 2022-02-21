/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '洞态文档',
  tagline: 'The tagline of my site',
  url: 'https://github.com/HXSecurity/DongTai-docs-docusaurus/edit/main/website/docs/${docPath}',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HXSecurity', // Usually your GitHub org/user name.
  projectName: 'DongTai-docs-docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: function ({ locale, docPath }) {
            return `https://github.com/HXSecurity/DongTai-docs-docusaurus/edit/main/website/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: 
  {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      algolia: {
        apiKey: "f19c90b8ffe16ed118dae930cd070507",
        indexName: "kubevela",        
      },

      navbar: {
        title: '洞态文档',
        logo: {
          alt: 'My Facebook Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'introduction',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'api',
            label: 'API',
          }, 
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'changelog',
            label: '更新日志',
          },                
          // Please keep GitHub link to the right for consistency.
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },        
          {
            type: 'localeDropdown',
            position: 'right',            
          },
          {
            href: 'https://github.com/HXSecurity/DongTai',
            className: "header-github-link",            
            position: 'right',
          },        
        ],
      },
      footer: {
        style: 'dark',  
        logo: {
          alt: 'Facebook Open Source Logo',
          src: 'img/oss_logo.png',
          href: 'https://opensource.facebook.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
