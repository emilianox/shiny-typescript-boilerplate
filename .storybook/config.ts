// tslint:disable: no-implicit-dependencies
import { addDecorator, addParameters, configure } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';

import { setDefaults } from 'react-storybook-addon-props-combinations'
setDefaults({
  // overwrite global defaults here
});

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
  withInfo({
    // styles: {
    //   header: {
    //     h1: {
    //       marginRight: '20px',
    //       fontSize: '25px',
    //       display: 'inline',
    //     },
    //     body: {
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //     },
    //     h2: {
    //       display: 'inline',
    //       color: '#999',
    //     },
    //   },
    //   infoBody: {
    //     backgroundColor: '#eee',
    //     padding: '0px 5px',
    //     lineHeight: '2',
    //   },
    // },
    // inline: true,
    header: false, // Global configuration for the info addon across all of your stories.
    source: true,
  }),
);

import { themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
