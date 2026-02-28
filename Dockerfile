# ---- Build Stage ----
FROM node:24-alpine AS builder

ARG APP_NAME

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build ${APP_NAME} --configuration production

# ---- Production Stage ----
FROM node:24-alpine AS production

ARG APP_NAME

WORKDIR /app

COPY --from=builder /app/dist/${APP_NAME} ./dist

EXPOSE 4000

CMD ["node", "dist/server/server.mjs"]
