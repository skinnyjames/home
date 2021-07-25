FROM node:14

WORKDIR /app

COPY . .

RUN npm i -g glance
RUN npm i 
RUN npm run build
EXPOSE 8080

CMD ["glance", "-v", "-p", "8080", "-d", "dist"]
