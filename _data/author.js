/**
 * @file Contains global data about the site author
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global author data module
 * @module _data/author
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
module.exports = {
  name: {
    fullName: "Your name",
    givenName: "Your given name",
    surname: "Your surname"
  },
  social: {
    // Add or remove accounts for social media platforms
    accounts: [
      {
        name: "GitHub",
        url: "https://github.com/username/"
      },
      {
        name: "GitLab",
        url: "https://gitlab.com/username/"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/username/"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/username/"
      },
      {
        name: "Messenger",
        url: "https://m.me/username/"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/username/"
      }
    ]
  }
}
