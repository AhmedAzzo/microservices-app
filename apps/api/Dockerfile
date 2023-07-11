FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json


COPY apps/tuv-api apps/tuv-api
COPY libs libs

RUN npm install

RUN npm run build tuv-api

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/tuv-api/main"]