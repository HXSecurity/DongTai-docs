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
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    url:'docs/introduction',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    url:'docs/introduction',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url:'docs/introduction',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];


const features2 = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    url:'docs/introduction',
    links:[
      {label:"链接1",url:"docs/introduction"},
      {label:"链接1",url:"docs/introduction"},
      {label:"链接1",url:"docs/introduction"},
      {label:"链接1",url:"docs/introduction"},
      {label:"链接1",url:"docs/introduction"},
      {label:"链接1",url:"docs/introduction"},
    ],
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    url:'docs/introduction',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
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


                  <Feature
                    url={features2[1].url}
                    key={features2[1].title}
                    title={features2[1].title}
                    imageUrl={features2[1].imageUrl}
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
