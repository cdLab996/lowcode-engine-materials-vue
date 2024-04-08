/* eslint-env node */
const { defineConfig } = require('@vue/cli-service')
const { defineLowCodePluginOption } = require('@knxcloud/vue-cli-plugin-lowcode')

module.exports = defineConfig({
  pluginOptions: {
    lowcode: defineLowCodePluginOption({
      /**
       * TODO: Not implemented, modify after installation in:
       * node_modules/@knxcloud/vue-cli-plugin-lowcode/dist/index.js
       *
       * if (!/(min|prod)/.test(postfix) && sourceMap)
       */
      sourceMap: false,
      assetsConfig: {
        builtinAssets: {
          packages: [],
          components: [],
        },
      },
    }),
  },
})
