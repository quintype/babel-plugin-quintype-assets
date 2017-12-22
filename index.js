import {defaultOptions, transformImportsInline} from "babel-plugin-transform-assets-import-to-string";

export default function quintypeAssets(x) {
  defaultOptions.extensions = defaultOptions.extensions.concat([".css", ".scss"]);
  return transformImportsInline(x);
}
