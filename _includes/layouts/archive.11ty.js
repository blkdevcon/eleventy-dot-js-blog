/**
 * @file Defines the chained template for a collection archive page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 */
exports.data = {
  layout: 'layouts/base'
}

/**
 * The content of the template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
exports.render = function (data) {
  var l10n = data.site[data.locale]
  return `<header>
    <h2>${data.title}</h2>
  </header>
  ${data.content}
  <section id="archive">
    <ul>
    ${data.pagination.items.map(item =>
      `<li>
        <a href="${item.data.page.url}">${item.data.title}</a>
        <time>${item.data.page.date
          .toLocaleDateString(`${l10n.locale}`, l10n.dateOptions)}</time>
      </li>`).join('')}
    </ul>
  </section>
  <footer>
    ${this.paginationNav(data)}
  </footer>`
}
