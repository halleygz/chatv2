const path = require('path');

module.exports = {
  "output": {
    "filename": "[name].pack.js"
  },
  "resolve": {
    "extensions": [
      ".js",
      ".json"
    ],
    "alias": {},
    "modules": [
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ]
  },
  "resolveLoader": {
    "modules": [
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              require.resolve('@babel/preset-env', { paths: [path.resolve(__dirname, '../node_modules')] }),
              require.resolve('@babel/preset-react', { paths: [path.resolve(__dirname, '../node_modules')] })
            ]
          }
        },
        "exclude": path.resolve(__dirname, '../node_modules/'),
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./index"
  },
  "mode": "development"
}