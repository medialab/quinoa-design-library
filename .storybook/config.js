import { configure, addDecorator, getStorybook } from '@storybook/react';
/**
 * Storybook addons
 */
import { configureViewport } from '@storybook/addon-viewport';
import { initScreenshot, setScreenshotOptions } from 'storybook-chrome-screenshot';


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(initScreenshot());

setScreenshotOptions({
  viewport: [
    // Mobile
    {
      width: 300,
      height: 420,
      isMobile: true,
      hasTouch: true,
    },
    // Tablet
    {
      width: 768,
      height: 800,
      isMobile: true,
      hasTouch: true,
    },
    // Desktop
    {
      width: 1024,
      height: 768,
    },
  ],
});

configure(loadStories, module);

export { getStorybook }
