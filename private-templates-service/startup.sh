#!/bin/bash

cd client
npm install
cd ../server
npm install
npm run deploy
npm run dev 