
FROM node:18-alpine as development
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile --ignore-scripts

FROM node:18-alpine as build
WORKDIR /app
COPY . .
COPY --from=development /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:18-alpine as production
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/dist ./dist
RUN mkdir /app/private_key/
RUN ssh-keygen -q -t rsa -N '' -f /app/private_key/key_for_jwt
COPY --from=build /app/node_modules ./node_modules

CMD [ "yarn", "start:prod" ]