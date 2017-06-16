sudo npm install -g mocha
npm install
npm run compile:ts
npm test
mocha -r ts-node/register test_js/**
