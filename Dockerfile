#
# ---- Base Image ----
FROM node:10.5-alpine AS base
ARG codacy_token
ENV CODACY_PROJECT_TOKEN=${codacy_token}
RUN apk add --no-cache git

#
# ---- Dependencies ----
FROM base AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
# install node packages
RUN npm set progress=false
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Build Agent ----
FROM dependencies AS buildAgent
COPY . .
RUN  npm test && npm run build

#
# ---- Deployable Artefact ----
FROM keymetrics/pm2:8-alpine
COPY --from=dependencies /app/prod_node_modules/ /node_modules/
COPY --from=buildAgent /app/dist/ /dist/
COPY ./pm2.json /
EXPOSE 80
ENTRYPOINT [ "pm2-runtime", "start", "pm2.json" ]