const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sourceMaps = require('@zeit/next-source-maps');
const offline = require('next-offline');

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([images, sourceMaps, offline, bundleAnalyzer({})]);
