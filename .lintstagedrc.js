module.exports = {
  'src/**/*.{js,jsx}?(x)':
    'npm run lint:format && npm run lint:fix && git add .',
  'src/**/*.{json,css}?(x)': 'npm run lint:format && git add .',
};
