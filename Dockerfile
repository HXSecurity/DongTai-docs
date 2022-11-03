FROM node:16
WORKDIR /doc/
COPY . .
RUN yarn && yarn build
FROM nginx
COPY --from=0 /doc/build /usr/share/nginx/html
EXPOSE 80