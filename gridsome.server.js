// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = function (api, options) {
    // api.chainWebpack((config, { isServer }) => {
    //     if (isServer) {
    //         config.externals([
    //             nodeExternals({
    //                 whitelist: [/^vuetify/]
    //             })
    //         ])
    //     }
    // })
    api.setClientOptions(options)

    api.chainWebpack((config, {isServer}) => {
        config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
    });
    api.loadSource(({addCollection, addMetadata}) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
        addMetadata("settings", require("./gridsome.config").settings);
    });

    api._app.pages.hooks.pageContext.tap("allVuePage", context => {
        context.pathRegexp = `^$path.+$`;
    });

    api.configureWebpack((config) => {
        config.mode = 'development';
        return config;
    });

};
