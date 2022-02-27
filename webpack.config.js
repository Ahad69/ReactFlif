module.exports = {
  devServer: {
    contentBase: './app',
    compress: true,
    proxy: {
      '/graphql': {
        target: 'https://flif-graphql-dun.vercel.app/server.js',
        secure: false,
      },
    },
  },
};