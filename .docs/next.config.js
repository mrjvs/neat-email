const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
})
 
module.exports = withNextra({
  output: 'export',
  basePath: "/neat-email",
  images: {
    unoptimized: true,
  }
})
