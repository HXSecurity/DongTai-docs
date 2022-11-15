FROM nginx
COPY ./build /usr/share/nginx/html
COPY ./deploy/default.conf //etc/nginx/conf.d/default.conf
EXPOSE 80