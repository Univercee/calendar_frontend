const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: process.env.BASE_URL ?? "127.0.0.1",
    port: process.env.PORT ?? 80,
  }
})
