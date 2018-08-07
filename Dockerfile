FROM node:8.11.3-alpine as builder
WORKDIR /npm-build
COPY . /npm-build
RUN npm install . && \
    npm run all

FROM nginx:1.15.2-alpine
COPY --from=builder /npm-build/dist/ /usr/share/nginx/html/
