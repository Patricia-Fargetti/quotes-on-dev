# Quotes on Dev Starter
Quotes on Dev project is the 4th project that I have developed at Red Academy. In this project we had to build a wordpress website that displays famous quotes and allows users to also post their own quotes.

## Technologies used :
- HTML
- SASS (enabling the use of variables and mixins)
- PHP
- Rest API
- Ajax
- Javascript
- JQuery
- GULP
- Wordpress

## Personal Learnings:
 I used the Ajax request method GET to display quotes that were stored in our database in the website's frontpage.I had to use a function to first localize the script(get data from server side to client side ),  and enqueue it.
 Also I learned how to POST data from our database and display it in the page and how to add a History API.
 The History API is very useful in case someone wants to check what was the previous quote by just clicking the previous arrow, also it is possible to costumize the URL.


## Installation Instructions
### For the starter theme (from Underscores):
------------------------------------------------

### 1. Download me (don't clone me!)

Then add me to your `wp-content/themes` directory.

### 2. Rename the `quotesondev-starter-master` directory

Make sure that the theme directory name is project appropriate! Do you need `starter` or `master` in the directory name?

### 3. Install the dev dependencies

Next you'll need to run `npm install` **inside your theme directory** to install the npm packages you'll need for Gulp, etc.

### 4. Update the proxy in `gulpfile.js`

Lastly, be sure to update your `gulpfile.js` with the appropriate URL for the Browsersync proxy (so change `localhost[:port-here]/[your-dir-name-here]` to the appropriate localhost URL).

And now would be a good time to `git init` :)
