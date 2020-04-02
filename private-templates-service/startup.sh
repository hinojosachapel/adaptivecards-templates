#!/bin/bash

cd adaptivecards-templating-service
npm install
cd ../adaptivecards-templating-client/typescript
npm install
npm run build
npm link
cd ../../client
npm link adaptive-templating-service-typescript-node
npm install
cd src
npm link adaptive-templating-service-typescript-node
cd ../../adaptivecards-templating-service
npm link
cd ../server
npm link adaptivecards-templating-service
npm install
npm run deploy
npm run dev 