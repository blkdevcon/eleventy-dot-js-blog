/**
 * @file Configures preferences for Eleventy
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/config/ 11ty Documentation}
 */

/**
 * Require the includes module for the following.
 *
 * - Filters (for modifying content on input)
 * - Shortcodes (for reusable content)
 * - Transforms (for modifying a template’s output)
 *
 * Storing these modules in separate directories,
 * rather than all in this file,
 * helps keep the codebase organized—at least that’s the idea.
 */
var includes = require('./_includes/index')

/**
 * 11ty’s configuration module
 * @module .eleventy
 * @param {Object} eleventyConfig 11ty’s Config API
 * @return {Object} 11ty’s Config object optional
 * @see {@link https://www.11ty.dev/docs/config/ Configuring 11ty}
 */
module.exports = function (eleventyConfig) {

  // Pass 11ty’s Conig object to the includes module (~/_includes)
  includes(eleventyConfig)

  /**
   * Copy static assets to the output directory
   * @see {@link https://www.11ty.dev/docs/copy/ Passthrough copy in 11ty}
   */
  eleventyConfig.addPassthroughCopy('css')

  /**
   * Have Eleventy watch files in the `/css/` directory for live browsersync
   * @see @{@link https://www.11ty.dev/docs/config/#add-your-own-watch-targets Add your own watch targets in 11ty}
   */
  eleventyConfig.addWatchTarget('./css/')

  // If you want to use an alternative file structure,
  // then you can uncomment this return statement
  // and change the values for one or more of these directories
  // (defaults shown).
  /*
  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  }
  */
}
