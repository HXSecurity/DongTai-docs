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
  tagline: '了解洞态产品轻松上手的指南手册',
  url: 'https://docs-v2.dongtai.io/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
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
    locales: ['zh'],
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({    
      algolia: {
        appId: '3J96QAFH37',
        apiKey: '498a632bcdf6a800fc90fc4d1233ff97',
        indexName: 'test-doc-search',
        contextualSearch: true,
      },      
      navbar: {
        title: '洞态',
        logo: {
          alt: 'DongTai Logo',
          src: 'img/dongtai-logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'introduction',
            label: '文档',
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
          href: 'https://opensource.facebook.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
