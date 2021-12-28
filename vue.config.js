const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  /* 生产环境构建文件的目录 defalut: dist */
  outputDir: "dist",
  /* 放置生成的静态文件目录（js css img） */
  assetsDir: "assets",
  /* 指定生成的index.html 输出路径 相对 default: index.html */
  indexPath: "index.html",
  /* 指定生成文件名中包含hash default: true */
  filenameHashing: true,
  /* 是否保存时 lint 代码 */
  // lintOnSave: process.env.NODE_ENV === "production",
  /* 是否使用编译器 default: false */
  runtimeCompiler: false,
  /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
  // transpileDependencies: [],
  /* 生产环境的source map */
  // 禁止console
  // drop_console: true,
  // 禁止debug语句
  // drop_debugger: true,
  productionSourceMap: true,
  // crossorigin: "",
  integrity: false,
  configureWebpack: config => {
    config.resolve.alias = {
      "@": resolve("src"),
    };
    config.plugins = [
      ...config.plugins,
      // new BundleAnalyzerPlugin()
    ];
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    https: false,
    // 自动启动浏览器
    open: true,
  },
};
