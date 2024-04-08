module.exports = {
  alias: {
    '@': './src',
    lowcode: './src/lowcode',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        engineScope: '@alilc',
        buildInAssets: [
          {
            package: 'dayjs',
            version: '1.11.7',
            urls: ['https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js'],
            library: 'dayjs',
          },
          {
            package: 'lodash',
            library: '_',
            urls: ['https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'],
          },
          {
            package: 'iconfont-icons',
            urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
          },
          {
            package: 'vant',
            version: '4.8.10',
            urls: ['https://cdn.jsdelivr.net/npm/vant'],
            library: 'vant',
          },
        ],
      },
    ],
  ],
}
