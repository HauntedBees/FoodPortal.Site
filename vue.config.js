const path = require("path");
const BannerPlugin = require("webpack/lib/BannerPlugin.js");
module.exports = {
    publicPath: "/food/",
    css: {
      loaderOptions: {
        scss: {}
      }
    },
    productionSourceMap: false,
    configureWebpack: {
      resolve: {
        alias: {
          src: path.resolve(__dirname, "src")
        }
      }
    },
    chainWebpack: config => {
      config.plugin("banner").use(BannerPlugin, [{ banner: `/**
*
* @source: https://github.com/HauntedBees/FoodPortal.Site
*
* @licstart The following is the entire license notice for the JavaScript code in this page.
*
* Copyright (C) 2020 Sean Finch
*
* The JavaScript code in this page is free software: you can
* redistribute it and/or modify it under the terms of the GNU
* Affero General Public License (GNU AGPL) as published by the Free Software
* Foundation, either version 3 of the License, or (at your option)
* any later version.  The code is distributed WITHOUT ANY WARRANTY;
* without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.
*
* As additional permission under GNU AGPL version 3 section 7, you
* may distribute non-source (e.g., minimized or compacted) forms of
* that code without the copy of the GNU AGPL normally required by
* section 4, provided you include this license notice and a URL
* through which recipients can access the Corresponding Source.
*
* @licend  The above is the entire license notice for the JavaScript code in this page.
*/
` }])
    },
    transpileDependencies: [ "vuetify" ],
    pluginOptions: {
      i18n: {
        locale: "en",
        fallbackLocale: "en",
        localeDir: "locales",
        enableInSFC: true
      }
    }
}