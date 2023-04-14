FROM node:latest

RUN mkdir -p /tour

WORKDIR /tour

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"]