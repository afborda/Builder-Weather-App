module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@services": "./src/services",
            "@utils": "./src/global/utils",
            "@assets": "./src/assets",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@global": "./src/global"
          }
        }
      ]
    ]
  };
};
