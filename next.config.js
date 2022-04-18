/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
}
