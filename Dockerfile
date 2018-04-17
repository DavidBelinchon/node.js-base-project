FROM node:wheezy 
CMD mkdir /root/app


COPY package.json package.json
COPY app.js app.js
COPY config config
COPY src src


RUN npm install

CMD ["node" , "app.js"]

EXPOSE 3000
