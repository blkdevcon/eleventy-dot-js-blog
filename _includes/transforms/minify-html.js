/**
 * @file Defines a filter to minify HTML template files
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/*
 * Import Juriy Zaytsev’s HTMLMinifier module
 * @see {@link https://github.com/kangax/html-minifier GitHub}
 */
var htmlmin = require("html-minifier")

/**
 * An Eleventy filter for minifying HTML template files
 * @module _includes/transforms/minify-html
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */
module.exports = function (eleventyConfig) {

  /**
   * Minifies HTML templates
   * @see {@link https://www.11ty.dev/docs/config/#transforms 11ty docs}
   */
  eleventyConfig.addTransform('minifyHTML', (content, outputPath) => {
    if( outputPath.endsWith('.html') ) {
      var minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content

  })

}
