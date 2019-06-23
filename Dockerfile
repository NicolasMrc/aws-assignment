FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
ADD ./ /usr/share/nginx/html
RUN chmod 777 -R /usr/share/nginx/html
COPY ./custom-nginx-file.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/aws-assignment
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]
