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
    name: 'ð¤ ã1j0kerã',
    url: 'https://mp.weixin.qq.com/s?__biz=MzU4MjEwNzMzMg==&mid=2247490593&idx=1&sn=411e9cac748341a24116fb15c78b4a04&source=41#wechat_redirect',
    description: (
      <Translate id="Usercase.password.description">
        åç¨æè¡ IAST è½å°å®è·µ
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
              <Translate id="Usercase.tryItButton">åå¾</Translate>
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
