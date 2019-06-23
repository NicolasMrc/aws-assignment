FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/*
ADD ./ /usr/share/nginx/html
RUN chmod 777 -R /usr/share/nginx/html
COPY ./custom-nginx-file.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/aws-assignment
COPY package*.json ./
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install
COPY . .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]
