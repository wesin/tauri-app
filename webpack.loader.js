const rules = {
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "tsx",
          target: "es2015",
          tsconfigRaw: require("./tsconfig.json"),
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff|ttf|svg|eot)$/, //fonts目录下四个文件后缀名
        use: ["url-loader"],
      },
    ],
  },
};

module.exports = rules;
