# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12.16.3 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG CONFIGURATION=local
ENV CONFIGURATION ${CONFIGURATION}

RUN npm run build --prod  -- --output-path=./dist/out

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
