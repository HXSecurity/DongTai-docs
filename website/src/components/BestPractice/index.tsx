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

const Bestpractices = [
  {
    name: '🏆 【Pa55w0rd】',
    url: 'https://mp.weixin.qq.com/s/USw4pvYXN69UT6KauNqx0A',
    description: (
      <Translate id="Bestpractice.password.description">
        某互联网甲方的落地实践
      </Translate>
    ),
  },
  {
    name: '🏆 【hardy4yooz】',
    url: 'https://i0x0fy4ibf.feishu.cn/docs/doccnaKOEdFxTQnydHTuLBS5OIg',
    description: (
      <Translate id="Bestpractice.hardy.description">
        容器部署洞态 Java Agent 实践
      </Translate>
    ),
  },
  {
    name: '🏆 【伍雄】',
    url: 'https://mp.weixin.qq.com/s/R5x1pZm5kobY9tGdC1KV7Q',
    description: (
      <Translate id="Bestpractice.wuxiong.description">
        请求管理｜洞态 IAST 在好大夫 SDL 中的最佳实践
      </Translate>
    ),
  },
  {
    name: '🏆 【伍雄】',
    url: 'hhttps://mp.weixin.qq.com/s/qyii_dLzUnZlfCIGZPOthA',
    description: (
      <Translate id="Bestpractice.wuxiong-02.description">
        解构开源IAST 打造好大夫安全灰盒利器
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function BestpracticeCard({name, url, description}: Props) {
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
              <Translate id="Bestpractice.tryItButton">前往</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BestpracticeCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Bestpractices.map((Bestpractice) => (
        <BestpracticeCard key={Bestpractice.name} {...Bestpractice} />
      ))}
    </div>
  );
}
