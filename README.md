Quinoa design library (WIP)
===

This repository exposes the design library used in quinoa projects. A design library/system is a centralized and general set of rules and operational elements (design files, stylesheets, components) to use within a family of user interfaces.


# Usage

## For designers (soon)

## For developers

```
yarn add https://github.com/medialab/quinoa-design-library
# or
npm install --save https://github.com/medialab/quinoa-design-library
```

Then :

```
// importing a component
import {Button} from 'quinoa-design-library';

// importing style from one of the themes
import style from 'quinoa-design-library/dist/themes/millet/style.css';

// import icon assets from one of the themes
import style from 'quinoa-design-library/dist/themes/millet/icons';
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

# Technical guidelines

- the system exposes react components. These are not supposed to be styled or added css classes during implementation
- inside the design library, components are styled thanks to a class-based system (inline styles are forbidden, component-specific classes are not advised)
- style is based on the bulma framework, enhanced with custom scss templates


