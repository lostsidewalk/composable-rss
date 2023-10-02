FROM node:lts-alpine as base 

ARG PORT=3000

# make the 'src' folder the current working directory
WORKDIR /src

# Build 
FROM base as build 

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY --link package.json package-lock.json .

# install the app dependencies 
RUN npm install 

COPY --link . .

RUN npm run build 
RUN npm prune 

FROM base 

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output 
EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
