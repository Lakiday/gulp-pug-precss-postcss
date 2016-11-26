# Simple Gulp recipes

## How to Use: 


1. `$ npm i gulp-cli -g`
2. `$ npm i`
3. `$ npm  start`



## Tasks:

* `gulp pug` - Build from pug to html
* `gulp style` - Compile sass to css (_PreCSS --> PostCSS --> CSS_) 
    List plugins in 
    `...
pipe( postcss([ require('postcss-fixes'), require('autoprefixer'), require('rucksack-css'), require('precss') ,require('oldie'), require('cssnano')] ))
...`


