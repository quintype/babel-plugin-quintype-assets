const {defaultOptions, transformImportsInline} = require("babel-plugin-transform-assets-import-to-string");

module.exports = function quintypeAssets(x) {
  defaultOptions.extensions = defaultOptions.extensions.concat([".css", ".scss"]);
  return transformImportsInline(x);
}
