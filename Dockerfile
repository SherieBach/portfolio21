FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
COPY main.js /usr/share/nginx/html/main.js
COPY css /usr/share/nginx/html/css
COPY image /usr/share/nginx/html/image
