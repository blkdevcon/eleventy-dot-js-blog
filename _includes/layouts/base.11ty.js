/**
 * @file Defines the base template
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#function JavaScript functions as templates in 11ty}
 */

/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {string} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ 11ty shortcodes}
 */
module.exports = function (data) {
  var l10n = data.site[data.locale]
  return `<!DOCTYPE html>
  <html lang="${data.locale ? l10n.locale : data.site.defaultLocale}">
    ${this.headTag(data)}
    <body class="grid gap no-margin">
      ${this.siteHeader(data)}
      ${this.nav(data.collections.nav, data.page)}
      <main id="main" class="grid gap">
        <!-- Delete between this line . . .  --><aside 
          style="background:var(--grayscale-200);color:var(--black);outline:var(--border);padding:var(--base-unit);">
          <h2>Get started!</h2>
          <ul>
            <li>Edit <code>_data/site.json</code> with your site’s information</li>
            <li>(Optional) Edit <code>.eleventy.js</code> with your configuration preferences</li>
            <li>Delete this message from <code>_includes/layouts/base.11ty.js</code></li>
          </ul>
          <p style="display:flex;gap:var(--base-unit);">&hellip; You could also <a href="https://app.netlify.com/start/deploy?repository=https://gitlab.com/reubenlillie/eleventy-dot-js-blog"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a></p>
          <p>More information on <a href="${data.pkg.homepage}">GitLab</a></p>
        </aside><!-- and this line -->
        ${data.content}
      </main>
      ${this.siteFooter(data)}
    </body>
  </html>`
}
