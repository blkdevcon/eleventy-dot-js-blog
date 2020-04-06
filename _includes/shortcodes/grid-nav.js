/**
 * @file Defines a menucode for displaying a navigation menu on a grid
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a navigation menu
 * @module _includes/shortcodes/grid-nav
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>

  /**
   * Site navigation markup
   * @method
   * @name gridNav
   * @param {Array} collection 11ty collection to map over
   * @param {Object} page The current 11ty `page` object
   * @return {String} The rendered shortcode
   * @example `${this.gridNav(data.collections.policies, data.page)}`
   * @see {@link https://www.11ty.dev/docs/collections/ Collections in 11ty}
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('gridNav', (collection, page) =>
    typeof collection !== 'undefined' && collection.length > 0
      ? `<nav class="grid">
        ${collection
          .sort((a, b) => a.data.weight - b.data.weight)
          .map(item => page.url === item.url
            ? `<a href="${item.url}" aria-current="page">
                ${item.data.menuTitle
                  ? item.data.menuTitle
                  : item.data.title
                }
              </a>`
            : `<a href="${item.url}">
                ${item.data.menuTitle
                  ? item.data.menuTitle
                  : item.data.title
                }
              </a>`).join("\n")}
        </nav>`
      : ''
  )
