const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
    },
}

// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
//
// exports.plugins.push(
//     new VuetifyLoaderPlugin({
//         match (originalTag, { kebabTag, camelTag, path, component }) {
//             if (kebabTag.startsWith('core-')) {
//                 return [
//                     camelTag,
//                     `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`
//                 ]
//             }
//         }
//     })
// )