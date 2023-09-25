# Deps reinstall

FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /frontend
COPY ./package.json \
 ./yarn.lock ./.yarnrc.yml \
  /frontend/
COPY ./.yarn /frontend/.yarn

ENV NODE_ENV production

# RUN yarn workspaces focus --all --production
# RUN yarn install --frozen-lockfile --production
RUN yarn install

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /frontend
COPY --from=deps /frontend/node_modules ./node_modules
COPY --from=deps /frontend/.yarn ./.yarn
COPY . .

RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /frontend


COPY --from=builder /frontend /frontend


CMD yarn start
