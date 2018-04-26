Quinoa design library (WIP)
===

This repository exposes the design library used in quinoa projects. A design library/system is a centralized and general set of rules and operational elements (design files, stylesheets, components) to use within a family of user interfaces.


# Usage


## For developers

```
yarn add https://github.com/medialab/quinoa-design-library
# or
npm install --save https://github.com/medialab/quinoa-design-library
```

Then :

```
// importing a component
import Button from 'quinoa-design-library/components/Buttons';

// importing style from one of the themes
import style from 'quinoa-design-library/themes/millet/style.css';

// import icon assets from one of the themes
import icons from 'quinoa-design-library/themes/millet/icons';
```


# Development

```
git clone https://github.com/medialab/quinoa-design-library
cd quinoa-design-library
yarn
```

Development scripts :

```
# run storybook to review components and mock views
yarn run storybook

# take screenshots of components and mock views (for design purposes or visual regression testing)
yarn screenshots

# lint code (autofix enabled)
yarn lint

# transpile babel code to plain js and package themes styles and assets
yarn build
```

## For designers (WIP)

The system relies on [story2sketch](https://github.com/chrisvxd/story2sketch) tool.

Use this design library in sketch :

1. copy from this repostory to your drive the content the [asketch file representing this library](https://github.com/medialab/quinoa-design-library/tree/master/sketch/quinoa-design-library.asketch.json)
1. install the [asketch2sketch.sketch plugin](https://github.com/brainly/html-sketchapp/releases/download/v3.0.2/asketch2sketch.sketchplugin.zip)
2. in sketch, go to `Plugins > From *Almost* Sketch to Sketch in Sketch menu bar.` and select the file copied from step 1. You should have added to your file a library of symbols taken from the library

![Image of the sketch](https://camo.githubusercontent.com/144c66d6a16d8de08f1faea3becae0eabcf93f65/68747470733a2f2f692e696d6775722e636f6d2f61413934614e4e2e706e67)


