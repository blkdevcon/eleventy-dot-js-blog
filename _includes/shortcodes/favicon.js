/**
 * @file Defines a shortcode to load a favicon for the user’s platform
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/**
 * A JavaScript Template module for favicons
 * @module _includes/shortcode/favicon
 * @param {Object} eleventyConfig 11ty’s Config API
 * @see {@link https://www.11ty.dev/docs/filters/ 11ty docs}
 */
module.exports = eleventyConfig =>

  /**
   * Load the appropriate favicon
   * @method
   * @name favicon
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.favicon(data)}`
   * @see {@link https://realfavicongenerator.net/ Real Favicon Generator}
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('favicon', function (data) {
    return `${this.fileToString('favicons/html_code.html')}`
  })
