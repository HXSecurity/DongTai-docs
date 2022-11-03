FROM nginx
COPY ./build /usr/share/nginx/html
EXPOSE 80
# FROM node:latest

# COPY  .  /opt 

# WORKDIR /opt

# RUN yarn && yarn build

# CMD ["yarn","run","serve"]