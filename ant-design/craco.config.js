
const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      // 自定义主题
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 给路径起别名
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}