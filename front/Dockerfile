FROM node:18 AS build
WORKDIR /build
COPY package*.json ./
COPY . .
RUN npm run build
FROM httpd:alpine
WORKDIR /var/www/html
COPY --from=build /build/build/ .
