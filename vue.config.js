const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: process.env.VUE_APP_BASE_URL ?? "127.0.0.1",
    port: process.env.VUE_APP_PORT ?? 80,
    proxy: process.env.VUE_APP_SERVER_URL
  }
})
