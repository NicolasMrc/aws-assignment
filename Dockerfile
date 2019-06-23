FROM smebberson/alpine-nginx-nodejs:latest
WORKDIR /var/www/aws-assignment
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "start"]
