Quinoa design library
===

This repository exposes the design library used in quinoa projects. A design library/system is a centralized and general set of rules and operational elements (design files, stylesheets, components) to use within a family of user interfaces.


# Usage

## For designers (soon)

## For developers

```
yarn add https://github.com/medialab/quinoa-design-system
# or
npm install --save https://github.com/medialab/quinoa-design-system
```


# Development

```
git clone https://github.com/medialab/quinoa-design-system
cd quinoa-design-system
yarn
```

Development scripts :

```
# run storybook to review components and mock views
yarn run storybook

# take screenshots of components and mock views (for design purposes or visual regression testing)
yarn run screenshots

# lint code (autofix enabled)
yarn run lint
```

# Technical guidelines

- the system exposes react components. These are not supposed to be styled or added css classes during implementation
- inside the design library, components are styled thanks to a class-based system (inline styles are forbidden, component-specific classes are not advised)
- style is based on the bulma framework, enhanced with custom scss templates


