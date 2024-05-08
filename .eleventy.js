const sortCollectionBySlug = (a, b) => {
  const slugA = a.page.fileSlug
  const slugB = b.page.fileSlug

  if (slugA < slugB) return -1
  if (slugB < slugA) return 1
  return 0
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.addWatchTarget('./src/js/')

  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' })
  // eleventyConfig.addPassthroughCopy({ 'src/media': 'media' })
  eleventyConfig.addPassthroughCopy({ 'src/favicon': 'assets/favicon' })
  eleventyConfig.addPassthroughCopy({
    'src/_includes/partials/sprite.svg': '/sprite.svg',
  })

  eleventyConfig.addCollection('section', (collectionApi) => {
    return collectionApi.getFilteredByTag('section').sort(sortCollectionBySlug)
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['html', 'md', 'njk'],
    passthroughFileCopy: true,
  }
}
