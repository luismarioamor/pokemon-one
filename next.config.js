/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pokemon-one",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          hostShell:
            "host-shell@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        exposes: {
          "./button": "./components/Button.tsx",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
