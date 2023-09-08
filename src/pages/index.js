/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import SearchBar from '../theme/SearchBar';

const features = [
  {
    title: '快速开始',
    imageUrl: 'img/index/getting-started.svg',
    url:'docs/category/快速开始/',
    description: '快速部署洞态，开始您的互动式安全检测项目',
  },
  {
    title: '用户案例',
    imageUrl: 'img/index/operation.svg',
    url:'docs/user-case/',
    description: '介绍洞态的用户案例',
  },
  {
    title: '最佳实践',
    imageUrl: 'img/index/star.svg',
    url:'docs/best-practice-case/',
    description: '洞态在 DevSecOps 中的最佳实践',
  },
  {
    title: 'API',
    imageUrl: 'img/index/api.svg',
    url:'docs/api/openapi/openapi-agent-develop/',
    description: '洞态api的使用简介',
  },
  {
    title: '开发者文档',
    imageUrl: 'img/index/wendang.svg',
    url:'docs/development/dongtai-java-agent-doc/',
    description: '这是 Dongtai-Java-Agent 的官方文档，在这里你将了解到关于 Dongtai-Java-Agent 的相关介绍',
  },
  {
    title: '更新日志',
    imageUrl: 'img/index/rizhi.svg',
    url:'docs/changelog/release-note/',
    description: '洞态发版通知'
  },
];


const features2 = [
  {
    title: '常见问题',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    url:'docs/introduction',
    links:[
      {label:"📙 洞态 IAST 和 百度 OpenRASP-IAST 的区别",url:"docs/get-help/faq-dongtai"},
      {label:"📙 洞态 IAST 漏洞覆盖",url:"docs/introduction/detection"},
      {label:"📙 部署洞态 Server 相关问题",url:"docs/get-help/faq-server"},
      {label:"📙 安装洞态 Agent 相关问题",url:"docs/get-help/faq-agent/faq-agent-install"},
      {label:"📙 洞态漏洞检测相关问题",url:"docs/get-help/faq-detect"},
      {label:"📙 联系我们",url:"docs/get-help/contact-us"},
    ],
    description: '',
  },
  
  {
    title: '更新发布',
    imageUrl: 'img/index/news.svg',
    url:'docs/changelog/release-note',
    links:[
      {label:"Java-Sec-code靶场测试报告",url:"https://i0x0fy4ibf.feishu.cn/docx/Vrs1d5emZoNQkNxO0Evc13htnIk"},
    ],
    description: '',
    
  },
];


function Feature({imageUrl, title, description,url}) {
  const imgUrl = useBaseUrl(imageUrl);
  const href = useBaseUrl(url)
  return (
    <div className={clsx('col col--4', styles.Cardbox)} onClick={()=>{
      window.location.href = href;
    }}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{fontWeight: 450}}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Feature3({imageUrl, title, description,url}) {
  const imgUrl = useBaseUrl(imageUrl);
  const href = useBaseUrl(url)
  return (
    <div className={clsx('col col--4', styles.Cardbox)}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 style={{fontWeight: 450}}>{title}</h3>
      <a href="https://doc.dongtai.io/docs/changelog/release-note" target="_self">取得新功能、更新和错误修复信息</a> 

      <p>{description}</p>
      <a href="https://i0x0fy4ibf.feishu.cn/docx/Vrs1d5emZoNQkNxO0Evc13htnIk" target="_self">Java-Sec-code靶场测试报告</a> 
    </div>
  );
}

function Feature2({title, description,links}) {
  return (
    <div className={clsx('col col--8', styles.Cardbox)}>
      <h3 style={{fontWeight: 450}}>{title}</h3>
      <p>{description}</p>
      <div  className={styles.linkBox}>
        {links.map((item,index)=>{
          const url = useBaseUrl(item.url)
          return<p key={index} className={styles.link} onClick={()=>{
            window.location.href = url
          }}>  {item.label}</p>
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        
          <div className={styles.flex_box}>
          <div className={styles.dt_search_box}>
            <SearchBar></SearchBar>
          </div> 
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className='row'>
                {features.map(({title, imageUrl, description,url}) => (
                  <Feature
                    url={url}
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    links={features2[1].links}
                    description={description}
                  />
                ))}
              </div>
              <div className='row'>

              <Feature2
                    url={features2[0].url}
                    key={features2[0].title}
                    title={features2[0].title}
                    imageUrl={features2[0].imageUrl}
                    links={features2[0].links}
                    description={features2[0].description}
                  />


                  <Feature3
                    url={features2[1].url}
                    key={features2[1].title}
                    title={features2[1].title}
                    imageUrl={features2[1].imageUrl}
                    links={features2[1].links}
                    description={features2[1].description}
                  />
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
