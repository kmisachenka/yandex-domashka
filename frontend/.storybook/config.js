import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
