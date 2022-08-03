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

const Usercases = [
  {
    name: '🤖 【1j0ker】',
    url: 'https://mp.weixin.qq.com/s?__biz=MzU4MjEwNzMzMg==&mid=2247490593&idx=1&sn=411e9cac748341a24116fb15c78b4a04&source=41#wechat_redirect',
    description: (
      <Translate id="Usercase.password.description">
        同程旅行 IAST 落地实践
      </Translate>
    ),
  },
  {
    name: '🤖 【耿师傅】',
    url: 'https://mp.weixin.qq.com/s?__biz=MzU4MjEwNzMzMg==&mid=2247490602&idx=1&sn=f46be7f279ca013cfacdae69dd34961a&source=41#wechat_redirect',
    description: (
      <Translate id="Usercase.password.description">
        去哪儿 IAST 在 Q-SDL 体系中的应用
      </Translate>
    ),
  }, 
  {
    name: '🤖 【伍雄】',
    url: 'https://mp.weixin.qq.com/s/dRpVDlVHaonXNl1E4IRBNw',
    description: (
      <Translate id="Usercase.password.description">
        解构开源IAST 打造好大夫安全灰盒利器
      </Translate>
    ),
  },
  {
    name: '🤖 【何纪新】',
    url: 'https://mp.weixin.qq.com/s/NCLsECx5HCL8VMvqUkLUxQ',
    description: (
      <Translate id="Usercase.password.description">
        洞态IAST在陌陌的应用
      </Translate>
    ),
  },
  {
    name: '🤖 【宁夏】',
    url: 'https://mp.weixin.qq.com/s/k1nBY5v3v66esL98hxkZNQ',
    description: (
      <Translate id="Usercase.password.description">
        58集团与火线联合开发洞态应用场景高可用功能！
      </Translate>
    ),
  }, 
  {
    name: '🤖 【宋良杰】',
    url: 'https://mp.weixin.qq.com/s/P75XnMj5DzPDRw-rOkUJbw',
    description: (
      <Translate id="Usercase.password.description">
        洞态全链路检测功能落地自如
      </Translate>
    ),
  }, 
  {
    name: '🤖 【陈浩若】',
    url: 'https://mp.weixin.qq.com/s/rbmVZ6JDaWNxYTqihn5Rrg',
    description: (
      <Translate id="Usercase.password.description">
        洞态在知乎的落地初尝试
      </Translate>
    ),
  }, 
  {
    name: '🤖 【PK】',
    url: 'https://mp.weixin.qq.com/s/Y5Aoc56XU2qgf-x70ehuHQ',
    description: (
      <Translate id="Usercase.password.description">
        洞态在某互联⽹⾦融科技企业的最佳落地实践
      </Translate>
    ),
  },
  {
    name: '🤖 【Spenser】',
    url: 'https://mp.weixin.qq.com/s/XN0zrVzYa-KQY2z6Wjbvgw',
    description: (
      <Translate id="Usercase.password.description">
        洞态在聚水潭如何做到误报率几乎为0？
      </Translate>
    ),
  },             
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function UsercaseCard({name, url, description}: Props) {
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
              <Translate id="Usercase.tryItButton">前往</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UsercaseCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Usercases.map((Usercase) => (
        <UsercaseCard key={Usercase.name} {...Usercase} />
      ))}
    </div>
  );
}
