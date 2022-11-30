FROM nginx
COPY ./build /usr/share/nginx/html
COPY ./deploy/default.conf /etc/nginx/conf.d/default.conf
COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80