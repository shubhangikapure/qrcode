module.exports = {
    resolve: {
      fallback: {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),  // Ensure this line is present
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "zlib": require.resolve("browserify-zlib"),
        "assert": require.resolve("assert/")
      }
    }
  };
  