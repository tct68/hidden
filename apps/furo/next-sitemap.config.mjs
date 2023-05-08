// @ts-check
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: `https://www.sushi.com/furo`,
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `https://www.sushi.com/furo/sitemaps/vestings.xml`,
      `https://www.sushi.com/furo/sitemaps/streams.xml`,
    ],
  },
  transform: (config, path) => {
    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

export default config
