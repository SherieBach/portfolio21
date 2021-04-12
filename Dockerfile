FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY image /usr/share/nginx/html/image