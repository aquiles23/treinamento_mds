FROM python:3.10
WORKDIR /api
COPY ./api/package.json /api/package.json

RUN yarn install

RUN yarn global add nodemon
CMD npm run dev