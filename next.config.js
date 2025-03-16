/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    distDir: 'out',

    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]'
        }
      });
      return config;
    }
  }
   
  module.exports = nextConfig