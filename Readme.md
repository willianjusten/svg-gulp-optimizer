## SVG Gulp Optimizer 

Some tests to optimize svg using Gulp, svgo, gulp-svgfallback and gulp-svgstore.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJs](http://gulpjs.com/)
- npm install -g svgo

```sh
# Clone this repository
$ git clone git://github.com/willianjusten/svg-gulp-optimizer.git new_project
$ cd new_project

# install dependencies
$ npm install
```

With the commands above, you have everything to start. Just paste your svg files to `original` folder.

### Folders and Files

```sh
new_project -
    /build -
        svg-defs.svg
    /compressed -
        svg images
    /original
        your original svg w/o optimization
    /png
        png generated for fallback
    .gitignore
    Gulpfile.js
    package.json
    Readme.md
```

### Tasks

- `gulp`: optimize, create defs and generate png.
- `gulp shell`: optimize svg.
- `gulp svgstore`: create defs file.
- `gulp svgfallback`: generate png files.

### License

This tool is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.
