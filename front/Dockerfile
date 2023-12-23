FROM node:20.9.0 as build

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build 


FROM nginxinc/nginx-unprivileged:alpine3.18-perl

USER root
COPY --chown=nginx:nginx --from=build /app/dist/first_project /var/www/html

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

COPY --chown=nginx:nginx ./entry.sh /etc/nginx/conf.d/entry.sh

RUN chmod +x /etc/nginx/conf.d/entry.sh

# RUN touch /tmp/nginx.pid

# RUN chmod 777 /tmp/nginx.pid


USER nginx

CMD ["/bin/sh", "-c","/etc/nginx/conf.d/entry.sh && nginx -g 'daemon off;'"]

