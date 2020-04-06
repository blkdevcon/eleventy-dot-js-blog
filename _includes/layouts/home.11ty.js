/**
 * @file Defines the chained template for home page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 */
exports.data = {
  layout: 'layouts/base'
}

/**
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
exports.render = data => {
  var reversed = [...data.collections.posts.slice(-2)].reverse()
  var l10n = data.site[data.locale]
  return `<article>
    ${data.content}
    <h2>${l10n.postsArchive.headline}</h2>
    <ul>
    ${reversed.map(item =>
      `<li>
        <a href="${item.data.page.url}">${item.data.title}</a>
        <time>${item.data.page.date.toLocaleDateString(`${l10n.locale}`, l10n.dateOptions)}</time>
      </li>`).join('')}
    </ul>
    <p><a href="${l10n.postsArchive.url}">${l10n.postsArchive.prompt}</a></p>
  </article>`
}
