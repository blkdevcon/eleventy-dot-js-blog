/**
 * @file Defines the chained template for a basic page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/data-global/ Using data in 11ty}
 */
exports.data = {
  layout: 'layouts/base'
}

/**
 * The content of the page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/shortcodes/ 11ty shortcodes}
 */
exports.render = data =>
  `<article>
    <header>
      <h1>${data.title}</h1>
    </header>
    ${data.content}
  </article>`
