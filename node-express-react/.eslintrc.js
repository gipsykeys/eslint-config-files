module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": ["error", "windows"],
    "semi":["error", "always"],
    "camelcase":"error",
    "indent":["error", 2],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true 
      }
    ],
    "no-console":"off",
  },
  "overrides": [
    {
      "files": ["src/*.js"],
      "rules": {
        "no-console":"warn",
      }
    }
  ]
};
