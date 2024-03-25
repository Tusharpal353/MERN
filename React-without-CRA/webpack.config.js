module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,

        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
