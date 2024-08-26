FROM node:14
WORKDIR /app
COPY package.json package.json 
COPY package-lock.json package-lock.json 
COPY server2.mjs server2.mjs
RUN npm install
ENTRYPOINT [ "node", "server2.mjs" ]
