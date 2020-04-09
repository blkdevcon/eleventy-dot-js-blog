# eleventy-dot-js-blog

A starter project showing how to build a blog with the [Eleventy](https://11ty.dev/) static site generator using [JavaScript templates (`*.11ty.js`)](https://11ty.dev/languages/javascript/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd87e631-aeaa-45fe-9c99-800ef96b53b1/deploy-status)](https://app.netlify.com/sites/eleventy-dot-js-blog/deploys)

## Demo

* [GitLab Pages](https://reubenlillie.gitlab.io/eleventy-dot-js-blog/)
* [Netlify](https://eleventy-dot-js-blog.netlify.com/)

## Summary

The [layouts](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/tree/master/_includes/layouts) are written entirely in vanilla JavaScript (files with the [`*.11ty.js`](https://www.11ty.dev/docs/languages/javascript/) extension). Eleventy processes those templates and creates prerendered copies of the site HTML.

## Getting started

Install [Node.js](https://nodejs.org/) on your machine (see [11ty documentation for specific requirements](https://www.11ty.dev/docs/getting-started/)).

Then enter the following commands into your terminal:


### 1. Clone this repository and all its dependencies

```cli
git clone git@gitlab.com:reubenlillie/eleventy-dot-js-blog.git my-blog-directory-name
```

### 2. Go to the working directory

```cli
cd my-blog-directory-name
```
Specifically take a look at the file named [`.eleventy.js`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/.eleventy.js) to see if you want to [configure any Eleventy options differently](https://www.11ty.dev/docs/config/).

### 3. Install the project dependencies with [NPM](https://www.npmjs.com/)

```cli
npm install
```

### 4. Edit the `.js` files in the [`_data`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/site.js) directory with your site information

### 5. Run Eleventy

```cli
npx eleventy
```

Or build and host locally for local development

```cli
npx eleventy --serve
```

Or build automatically when a template changes

```cli
npx eleventy --watch
```

Or in debug mode

```cli
DEBUG=* npx eleventy
```

## Publish your own copy

The command `npm run build` will generate a copy of the site files in a `_site` directory, which you can deploy with any hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/reubenlillie/eleventy-dot-js-blog)

&copy; 2020 by [Reuben L. Lillie](https://twitter.com/reubenlillie)
