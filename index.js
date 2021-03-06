module.exports = {
  rules: {
    "does-not-exist": require("./lib/rules/does-not-exist"),
    "global-master": require("./lib/rules/global-master"),
    "no-not-query": require("./lib/rules/no-not-query"),
    "no-parse-promise-assign": require("./lib/rules/no-parse-promise-assign"),
    "no-slow-query": require("./lib/rules/no-slow-query"),
    "prefer-parse-promise": require("./lib/rules/prefer-parse-promise"),
    "no-promise-always": require("./lib/rules/no-promise-always"),
    "save-with-master": require("./lib/rules/save-with-master")
  },
  rulesConfig: {
    "does-not-exist": 2,
    "global-master": 1,
    "no-not-query": 2,
    "no-parse-promise-assign": 1,
    "no-slow-query": 1,
    "prefer-parse-promise": 1,
    "no-promise-always": 1,
    "save-with-master": 2
  }
};
