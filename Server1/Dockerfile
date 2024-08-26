FROM node:14
WORKDIR /app
COPY package.json package.json 
COPY package-lock.json package-lock.json 
COPY server1.mjs server1.mjs
RUN npm install
ENTRYPOINT [ "node", "server1.mjs" ]
