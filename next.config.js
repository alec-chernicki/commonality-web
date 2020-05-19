const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sourceMaps = require('@zeit/next-source-maps');
const offline = require('next-offline');

module.exports = withPlugins([images, sourceMaps, offline]);
