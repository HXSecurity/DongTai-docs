FROM node:latest

COPY  .  /opt 

WORKDIR /opt

RUN yarn && yarn build

CMD ["yarn","run","serve"]