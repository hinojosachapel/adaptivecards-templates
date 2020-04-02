#!/bin/bash

cd adaptivecards-templating-service
npm install
cd ../adaptivecards-templating-client/typescript
npm install
npm run build
npm link
cd ../../client
rm -rf node_modules/ package-lock.json
npm install
npm link adaptive-templating-service-typescript-node
cd src
npm link adaptive-templating-service-typescript-node
cd ../../adaptivecards-templating-service
npm link
cd ../server
npm link adaptivecards-templating-service
npm install
npm run deploy
npm run dev 