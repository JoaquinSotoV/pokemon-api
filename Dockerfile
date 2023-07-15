FROM node:20-alpine3.18

WORKDIR /app

COPY package.json package.json

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]