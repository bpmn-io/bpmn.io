FROM node:8.6.0-alpine as builder
WORKDIR /npm-build
COPY . /npm-build
RUN npm install . && \
    npm run all

FROM nginx:1.13.5-alpine
COPY --from=builder /npm-build/dist/ /usr/share/nginx/html/
