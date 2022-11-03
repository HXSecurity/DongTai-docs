FROM node:16
WORKDIR /doc/
COPY . .
RUN yarn && yarn build
COPY --from=0 /gva_web/dist /usr/share/nginx/html
FROM nginx
COPY --from=0 /doc/build /usr/share/nginx/html
EXPOSE 80