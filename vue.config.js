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
      config.plugin("banner").use(BannerPlugin, [{ banner: `@source: https://github.com/HauntedBees/FoodPortal.Site/

@licstart  The following is the entire license notice for the
JavaScript code in this page.

Copyright (C) Sean Finch


This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

@licend  The above is the entire license notice
for the JavaScript code in this page.

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