/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const ResourceBlocks = [
  {
    name: '📦 【洞态 IAST 出品】',
    url: 'https://i0x0fy4ibf.feishu.cn/docx/doxcnSoxZjm2nEMyT3KJwg6ej4e',
    description: (
      <Translate id="ResourceBlock.password.description">
        洞态进阶操作：1.8.X API 文档 
      </Translate>
    ),
  }, 
  {
    name: '📦 【洞态 IAST 出品】',
    url: 'https://i0x0fy4ibf.feishu.cn/file/boxcn0YZQQeeBkBylPBG1EOzr8g',
    description: (
      <Translate id="ResourceBlock.password.description">
        洞态进阶操作：使用配置 Elasticsearch 
      </Translate>
    ),
  },
  {
    name: '📦 【58安全实验室出品】',
    url: 'https://i0x0fy4ibf.feishu.cn/mindnotes/bmncnDFMx71BANnx7Qd406TjjLe',
    description: (
      <Translate id="ResourceBlock.password.description">
        洞态 IAST-AGENT v1.3.0 启动运行过程
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function ResourceBlockCard({name, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="ResourceBlock.tryItButton">前往</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResourceBlockCardsRow(): JSX.Element {
  return (
    <div className="row">
      {ResourceBlocks.map((ResourceBlock) => (
        <ResourceBlockCard key={ResourceBlock.name} {...ResourceBlock} />
      ))}
    </div>
  );
}
